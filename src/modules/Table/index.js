import React, { useState, useRef, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
    PaginationProvider,
    SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { cloneDeep, isEqual } from "lodash";
import { createRoot } from 'react-dom/client';
import { ClickAwayListener } from "@mui/material";
import ToolkitProvider, {
    CSVExport,
    ColumnToggle,
} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactToPrint from "react-to-print";
import DragHandle from "../../components/DragHandle";
import Search from "../../components/Search";
import PaginationLinks from "../../components/PaginationLinks";
import { numberReverseFormat } from "../../utils/index";
import * as XLSX from 'xlsx';
import { useTranslation } from "react-i18next";
import Checkbox from "@mui/material/Checkbox";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { fetchRequest } from 'utils/fetchRequest'
// import { setLoading } from 'utils/redux/action';
import "../../styles/datatable.css";
import { useDispatch } from "react-redux";

const defaultConfig = {
    showPagination: true,
    showFilter: true,
    showLeftButton: false,
    leftButtonClassName: "",
    leftButtonStyle: {},
    leftButtonText: "",
    onBeforePrint: {},
    onAfterPrint: {},
    showSecondaryLeftButton: false,
    secondaryLeftButtonClassName: '',
    secondaryLeftButtonStyle: {},
    secondaryLeftButtonText: '',
    tableMarginLess: false,
    secondaryLeftButtonIcon: false,
    defaultSort: [
        {
            dataField: "id",
            order: "asc",
        },
    ],
    showAllData: false,
    footer: false,
    footerStyle: "",
    headerFilter: false,
    isTableEdit: false,
    blurToSave: false,
    isTableStriped: true,
    defaultPageOptions: {
        custom: true,
        paginationSize: 5,
        sizePerPageList: [10, 25, 50, 100],
        page: 1,
        sizePerPage: 10,
    }
};

const CustomToggleList = ({
    anchorRef,
    columns,
    onColumnToggle,
    handleToggle,
    open,
    handleClose,
}) => {
    const clone = columns.filter((obj) => obj?.dataField !== 'checkable')
    return (<>
        <button
            ref={anchorRef}
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="menu"
            onClick={handleToggle}
            className="btn m-btn--icon m-btn--icon-only btn-primary br-03 mx-1"
            style={{
                width: '33px',
                height: '33px',
            }}
        >
            <i className="la la-columns" style={{ fontSize: "22px" }} />
        </button>
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: 1000 }}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === "bottom" ? "center top" : "center bottom",
                    }}
                >
                    <Paper style={{ padding: "12px 20px" }}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <FormGroup id="split-button-menu">
                                {
                                    clone.map(column => {
                                        if (column?.dataField === 'dt-row-order-number' || column?.dataField === 'dt-row-click-context') return
                                        return (
                                            <FormControlLabel
                                                key={column.dataField}
                                                control={
                                                    <div className="dtableColumnCheckbox">
                                                        <Checkbox defaultChecked={column.hidden ? false : true} />
                                                    </div>
                                                }
                                                label={column.text}
                                                onChange={() => onColumnToggle(column.dataField)}
                                                style={{
                                                    whiteSpace: "nowrap",
                                                    height: 25,
                                                }}
                                            />
                                        )
                                    })
                                }
                            </FormGroup>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </>
)};




const Table = ({
    data = [],
    config: propsConfig = {},
    detailConfig = {},
    columns = [],
    detailColumns = [],
    onInteraction,
    loading = false,
    remote = false,
    totalDataSize = 0,
    currentPage = 1,
    defaultPageSize = 10,
    contextMenus = [],
    onContextMenuItemClick,
    onLeftButtonClick,
    onSecondaryLeftButtonClick,
    wrapperClassName = "",
    className = "",
    draggable = false,
    onDragStart,
    onDrop,
    showOrdering = true,
    individualContextMenus = false,
    isSelect = false,
    selectMode = null,
    selectPosition = "left",
    onSelect,
    onSelectAll,
    clickContextMenu,
    locale = 'mn',
    checkable = false,
    onCheckable,
    rowStyle,
    noSelectRow = false,
    expandable = false,
    fetchRequest = {},
    setLoading
}) => {
    const [localColumns, setLocalColumns] = useState(columns || []);
    const { t } = useTranslation();
    const [initialData, setInitialData] = useState(data);
    // const [pageNumber, setPageNumber] = useState(1);
    // const [sizePerPage, setSizePerPage] = useState(10);
    // const [searchValue, setSearchValue] = useState("");

    const [open, setOpen] = useState(false);
    const [allCheckValue, setAllCheckValue] = useState(false);

    const config = { ...defaultConfig, ...propsConfig };

    const [pageNumber, setPageNumber] = useState(currentPage);
    const [sizePerPage, setSizePerPage] = useState(config.defaultPageOptions.sizePerPage || 10);
    const [searchValue, setSearchValue] = useState(config.defaultPageOptions.search || '');
    const [date, setDate] = useState(null);

    // const [searchValue, setSearchValue] = useState(config.defaultPageOptions.search || '');
    // const [sizePerPage, setSizePerPage] = useState(config.defaultPageOptions.sizePerPage || 10);
    // const [pageNumber, setPageNumber] = useState(1);

    // const config = { ...defaultConfig, ...propsConfig };
    const tableRef = useRef(null);
    const anchorRef = useRef(null);
    const { ExportCSVButton } = CSVExport;
    const { ToggleList } = ColumnToggle;

    const unMountContextMenus = () => {
        const wrapper = getWrapper();
        if (wrapper) {
            const root = createRoot(wrapper);
            root.unmount();
        }
    };

    useEffect(() => {
        return () => {
            unMountContextMenus();
        };
    }, []) 

    useEffect(() => {
        if (!isEqual(data, initialData)) {
            setInitialData(data);
        }
        if (config.showAllData) {
            setSizePerPage(data.length + 10);
        }
    }, [data]);

    const MyExportCSV = (props) => {
        const dispatch = useDispatch();
    
        const handleRemoteExcel = () => {
            if (props.fetchUrl) {
                dispatch(setLoading(true));
                fetchRequest(props.excelFileRemoteUrl, "POST", props.excelFileRemoteParams)
                    .then((res) => {
                        if (res.success) {
                            if (res.list && res.list.length > 0) {
                                handleClick(res.list);
                            } else {
                                handleClick([]);
                            }
                        }
                        dispatch(setLoading(false));
                    })
                    .catch(() => {
                        dispatch(setLoading(false));
                    });
            } else {
                window.open(props.excelFileRemoteUrl, '_blank')
            }
        }
    
        function removeTags(str) {
            if ((str === null) || (str === ''))
                return false;
            else
                str = str.toString();
    
            return str.replace(/(<([^>]+)>)/ig, ' ');
        }
    
        const handleClick = (data = []) => {
            const tableList = [];
            if (props.columns && props.columns.length > 0 && props.data && props.data.length > 0) {
                const header = props.columns;
                const filterRecords = data && data.length > 0 ? data : props.data;
    
                let rowIndex = 1;
                let records = [];
                for (let record of filterRecords) {
                    let recordCol = {};
                    let colIndex = 1;
                    for (let column of header) {
                        if (!column.hide && !column.hidden && column.text != '' && !column.isDummyField && column.dataField?.toLowerCase() != 'avatar' && column.text != 'image' && column.colType !== 'image') {
                            if (column.dataField in record) {
                                const isDateField = column.colType === 'date';
    
                                let field = column.dataField;
                                if (column.colType && column.colType === 'number') {
                                    if (typeof (record[field]) === 'string' && record[field].includes("'")) {
                                        recordCol['№'] = rowIndex;
                                        recordCol[column.text] = parseInt(numberReverseFormat(record[field], "'", ''));
                                        colIndex++;
                                    } else if (typeof (record[field]) === 'string' && record[field].includes(',')) {
                                        recordCol[column.text] = parseInt(numberReverseFormat(record[field], ',', ''));
                                        colIndex++;
                                    } else {
                                        recordCol[column.text] = record[field];
                                        colIndex++;
                                    }
                                } else if (column.colType && column.colType === 'html') {
                                    if (column.textValueKey) {
                                        if (column.text !== undefined) {
                                            recordCol[column.text] = record[column.textValueKey] || '-';
                                        }
                                    } else {
                                        if (record[field].props && record[field].props.data) {
                                            let cellText = record[field].props && record[field].props.data || '';
                                            recordCol[column.text] = cellText;
                                        } else {
                                            let cellText = removeTags(record[field]);
                                            recordCol[column.text] = cellText;
                                        }
                                    }
                                    colIndex++;
                                } else if (column.colType && column.colType === 'qpay') {
                                    recordCol[column.text] = record[field].toString();
                                    colIndex++;
                                } else if (column.colType && column.colType === 'date_label') {
                                    recordCol[column.text] = (record[field].props && record[field].props.data ? record[field].props.data : '');
                                    colIndex++;
                                } else if (column.colType && column.colType === 'array') {
                                    recordCol[column.text] = record[field]?.map(obj => obj[column.colArrayField])?.join(', ');
                                    colIndex++;
                                } else if (column.colType && column.colType === 'date' && isDateField) {
                                    recordCol[column.text] = record[field]?.date?.substring(0, 10);
                                    colIndex++;
                                } else {
                                    recordCol['№'] = rowIndex;
                                    recordCol[column.text] = record[field];
                                    colIndex++;
                                }
                            }
                        }
                    }
                    rowIndex++;
                    records.push(recordCol);
                }
    
                if (rowIndex == (filterRecords.length + 1)) {
                    let footerRecordCol = {};
                    for (let i = 0; i < header.length; i++) {
                        let column = header[i];
                        footerRecordCol[column.text] = i;
                        if (column && column.footerAvg && column.footerAvg === true) {
                            let avg = 0;
                            let total = 0;
                            let isPercent = false
                        }
                    }
                }
    
                let ws = XLSX.utils.json_to_sheet(records);
                let wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "sheet");
                let buf = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' }); // generate a nodejs buffer
                let str = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' }); // generate a binary string in web browser
                XLSX.writeFile(wb, `${props?.excelFileName || 'file'}.xlsx`);
            }
    
        };
    
        return (
            <button
                style={{
                    height: '33px',
                    width: '33px',
                    // justifyContent: 'center',
                    // display: 'inline-flex',
                    // alignItems: 'center'
                }}
                onClick={props.excelFileRemote ? handleRemoteExcel : handleClick}
                className='btn m-btn--icon m-btn--icon-only btn-primary br-03 mx-1'
            >
                <i
                    className="la-old la-file-excel-o"
                    style={{
                        fontSize: '22px',
                        color: '#ffffff',
                    }}
                />
            </button>
        );
    };
    const pgOptions = {
        custom: true,
        paginationSize: 5,
        sizePerPageList: config.defaultPageOptions.sizePerPageList || [10, 25, 50, 100],
        totalSize: remote ? totalDataSize : data && data.length > 0 ? data.length : 0,
        page: currentPage,
        sizePerPage,
        // custom: true,
        // paginationSize: 5,
        // sizePerPageList: config.defaultPageOptions.sizePerPageList || [10, 25, 50, 100],
        // totalSize: remote ? totalDataSize : data && data.length > 0 ? data.length : 0,
        // page: config?.defaultPageOptions?.page ? config.defaultPageOptions.page : pageNumber,
        // sizePerPage: config?.defaultPageOptions?.sizePerPage || sizePerPage,
        // search: config?.defaultPageOptions?.search || '',
    };

    useEffect(() => {
        setLocalColumns(columns || [])
    }, [columns])

    useEffect(() => {
        if (config.defaultPageOptions) {
            setSearchValue(config.defaultPageOptions.search || '')
        }

    }, [config.defaultPageOptions])

    const getUserInteraction = (object, sValue) => {
        let tableState = {};
        if (tableRef.current) {
            const {
                page,
                sizePerPage: pageSize,
                sortField,
                sortOrder,
            } = tableRef.current.getNewestState();
            tableState = {
                page: page || 1,
                pageSize,
                sort: sortField,
                order: sortOrder,
                search: sValue,
                filter: object,
            };
        }
        onInteraction?.({
            ...tableState,
            ...object,
        });
    };

    const handleTableChange = (type, newState) => {
        switch (type) {
            case "filter": {
                break;
            }
            case "pagination": {
                if (newState.page !== pageNumber) {
                    setPageNumber(newState.page);
                }
                if (newState.sizePerPage !== sizePerPage) {
                    setSizePerPage(newState.sizePerPage);
                    // getUserInteraction({ pageSize: newState.sizePerPage });
                }
                getUserInteraction({
                    page: newState.page ? newState.page : 1,
                    pageSize: newState.sizePerPage
                }, searchValue);
                break;
            }
            case "sort": {
                getUserInteraction({
                    sort: newState.sortField,
                    order: newState.sortOrder,
                }, searchValue);
                break;
            }
            case "cellEdit": {
                break;
            }
            default: {
                break;
            }
        }
    };

    const getNoDataText = () => {
        if (loading) {
            return '<div className="spinner-border text-primary" />';
        }

        return <div style={{ textAlign: "center" }}>{t("action.emptyTable")}</div>;
    };

    const handleSearch = () => {
        if (remote) {
            setPageNumber(1)
            getUserInteraction({}, searchValue, date);
        }
    };

    const getTableData = () => {
        if (remote) {
            return data;
        }

        let clone = [];
        if (Array.isArray(initialData)) {
            clone = cloneDeep(initialData);
        } else {
            clone = cloneDeep(Object.values(initialData));
        }

        if (searchValue) {
            const val = searchValue.toLowerCase();
            return clone.filter((record) => {
                for (const column of localColumns) {
                    if (record.hasOwnProperty(column.dataField)) {
                        /// ignoring number type for now!!!.
                        if (
                            typeof record[column.dataField] === "string" &&
                            record[column.dataField].toLowerCase().includes(val)
                        ) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }
        return clone;
    };

    const onContextMenu = (e, row) => {
        e.preventDefault();
        unMountContextMenus();
        let availableContextMenus = [];

        if (individualContextMenus) {
            if (contextMenus.length && row.contextMenuKeys?.length) {
                for (const menu of contextMenus) {
                    if (row.contextMenuKeys.includes(menu.key)) {
                        availableContextMenus.push(menu);
                    }
                }
            }
        } else {
            availableContextMenus = contextMenus;
        }

        if (availableContextMenus.length) {
            const wrapper = getWrapper();
            const menu = (
                <ClickAwayListener onClickAway={unMountContextMenus}>
                    <div
                        className="dt-cm-wrapper"
                        style={{ top: e.pageY, left: e.pageX }}
                    >
                        {availableContextMenus.map((menu) => {
                            return (
                                <div
                                    style={menu?.style ? menu.style : (menu.key == 'view' ? { position: 'relative', right: 1 } : {})}
                                    className="dt-cm-item"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        unMountContextMenus();
                                        onContextMenuItemClick?.(row.id, menu.key, row, event);
                                    }}
                                    key={menu.key}
                                >
                                    <div style={{ transform: 'translate(0px, -2px)' }}>{menu.icon ? menu.icon : null}</div>
                                    <span className="black-color">{menu.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </ClickAwayListener>
            );

            const root = createRoot(wrapper);
            root.render(menu);
        }
    };

    const onClickMore = (e, row) => {
        e.preventDefault();
        unMountContextMenus();

        let availableContextMenus = [];

        if (individualContextMenus) {
            if (contextMenus.length && row.contextMenuKeys?.length) {
                for (const menu of contextMenus) {
                    if (row.contextMenuKeys.includes(menu.key)) {
                        availableContextMenus.push(menu);
                    }
                }
            }
        } else {
            availableContextMenus = contextMenus;
        }

        if (availableContextMenus.length) {
            const wrapper = getWrapper();
            const menu = (
                <ClickAwayListener onClickAway={unMountContextMenus}>
                    <div
                        className="dt-cm-wrapper"
                        style={{ top: e.pageY, left: e.pageX }}
                    >
                        {availableContextMenus.map((menu) => {
                            return (
                                <div
                                    style={menu?.style ? menu.style : (menu.key == 'view' ? { position: 'relative', right: 1 } : {})}
                                    className="dt-cm-item"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        unMountContextMenus();
                                        onContextMenuItemClick?.(row.id, menu.key, row, event);
                                    }}
                                    key={menu.key}
                                >
                                    <div style={{ transform: 'translate(0px, -2px)' }}>{menu.icon ? menu.icon : null}</div>
                                    <span className="black-color">{menu.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </ClickAwayListener>
            );
            const root = createRoot(wrapper);
            root.render(menu);
        }
    };

    const getWrapper = () => {
        const id = "datatable-contextmenu-wrapper";
        const cmWrapper = document.getElementById(id);
        if (cmWrapper) {
            return cmWrapper;
        } else {
            const cmWrapper = document.createElement("div");
            cmWrapper.id = id;
            document.body.appendChild(cmWrapper);
            return cmWrapper;
        }
    };

    const onRowDragStart = (params) => {
        onDragStart?.(params);
    };

    const onRowDrop = (params) => {
        onDrop?.(params);
    };

    const onCheckableHandler = (e, id, rowIndex, allCheck) => {
        let clone = [...initialData];

        if (clone && clone.length > 0 && id) {
            for (let i = 0; i < clone.length; i++) {
                if (id == clone[i].id) {
                    clone[i].checkable = e.target.checked;
                }
            }
        }

        setInitialData(clone);
        if (allCheck == "allCheck") {
            setAllCheckValue(e.target.checked);
            onCheckable?.("allCheck", rowIndex, e.target.checked);
        } else {
            onCheckable?.("row", rowIndex, e.target.checked, id);
        }
    };

    const getColumns = (props = null) => {
        const cols = [];
        if (draggable) {
            if (config.footer) {
                cols.push({
                    isDummyField: true,
                    text: "",
                    dataField: "dragHandle",
                    formatter: (cell, row) => {
                        return (
                            <DragHandle
                                rowClass={`dt-row-${row.id}`}
                                data={row}
                                onStart={onRowDragStart}
                                onDrop={onRowDrop}
                            />
                        );
                    },
                    headerStyle: () => {
                        return {
                            width: 30,
                        };
                    },
                    style: {
                        verticalAlign: "middle",
                    },
                    footer: "",
                    footerStyle: config.footerStyle,
                });
            } else {
                cols.push({
                    isDummyField: true,
                    text: "",
                    dataField: "dragHandle",
                    formatter: (cell, row) => {
                        return (
                            <DragHandle
                                rowClass={`dt-row-${row.id}`}
                                data={row}
                                onStart={onRowDragStart}
                                onDrop={onRowDrop}
                            />
                        );
                    },
                    headerStyle: () => {
                        return {
                            width: 30,
                        };
                    },
                    style: {
                        verticalAlign: "middle",
                    },
                });
            }
        }

        if (checkable) {
            cols.push({
                isDummyField: true,
                text: "",
                headerFormatter: (column, index, components) => {
                    return (
                        <Checkbox
                            style={{ padding: 3 }}
                            className="checkbox-light"
                            checked={allCheckValue}
                            onChange={(e) => onCheckableHandler(e, null, index, "allCheck")}
                        />
                    );
                },
                dataField: "checkable",
                formatter: (cell, row, rowIndex) => {
                    return (
                        <Checkbox
                            style={{ padding: 4 }}
                            className="checkbox-light"
                            checked={row.checkable || false}
                            disabled={row.disabled || false}
                            onChange={(e) => onCheckableHandler(e, row.id, rowIndex, "")}
                        />
                    );
                },
                headerStyle: () => {
                    return {
                        width: 50,
                    };
                },
                style: {
                    verticalAlign: "middle",
                },
            });
        }

        if (showOrdering) {
            if (config.footer) {
                cols.push({
                    isDummyField: true,
                    text: "№",
                    dataField: "dt-row-order-number",
                    formatter(cell, row, rowIndex) {
                        if (props?.page && props?.sizePerPage) {
                            return rowIndex + 1 + ((props?.page - 1) * props?.sizePerPage);
                        } else {
                            return rowIndex + 1;
                        }
                    },
                    headerStyle: () => {
                        return {
                            width: 50,
                        };
                    },
                    headerAlign: "center",
                    style: {
                        textAlign: "center",
                    },
                    footer: "",
                    footerStyle: config.footerStyle,
                });
                if (clickContextMenu) {
                    cols.push({
                        isDummyField: true,
                        text: "",
                        dataField: "dt-row-order-number",
                        formatter(cell, row, rowIndex) {
                            if (props?.page && props?.sizePerPage) {
                                return rowIndex + 1 + ((props?.page - 1) * props?.sizePerPage);
                            } else {
                                return rowIndex + 1;
                            }
                        },
                        headerStyle: () => {
                            return {
                                width: 50,
                            };
                        },
                        headerAlign: "center",
                        style: {
                            textAlign: "center",
                        },
                        footer: "",
                        footerStyle: config.footerStyle,
                    });
                }
            } else {
                cols.push({
                    isDummyField: true,
                    text: "№",
                    dataField: "dt-row-order-number",
                    formatter(cell, row, rowIndex) {
                        if (props?.page && props?.sizePerPage) {
                            return rowIndex + 1 + ((props?.page - 1) * props?.sizePerPage);
                        } else {
                            return rowIndex + 1;
                        }
                    },
                    headerStyle: () => {
                        return {
                            width: 50,
                        };
                    },
                    headerAlign: "left",
                    style: {
                        textAlign: "left",
                    },
                });
                if (clickContextMenu) {
                    cols.push({
                        isDummyField: true,
                        text: "",
                        dataField: "dt-row-click-context",
                        formatter(cell, row) {
                            return (
                                <button
                                    type="button"
                                    className=" bt-context-menu btn-icon btn-icon-only position-relative btn btn-outline-info btn-sm"
                                    onClick={(e) => onClickMore(e, row)}
                                >
                                    <i className="flaticon-more"></i>
                                </button>
                            );
                        },
                        headerStyle: () => {
                            return {
                                width: 50,
                            };
                        },
                        headerAlign: "center",
                        style: {
                            textAlign: "center",
                        },
                    });
                }
            }
        }

        for (const col of localColumns) {
            if (config.headerFilter) {
                if (col.filterDisable) {
                    cols.push({
                        ...col,
                    });
                } else {
                    cols.push({
                        ...col,
                        filter: textFilter({
                            placeholder: ' ',
                            onFilter: (filterValue) => {
                                getUserInteraction({
                                    filter: filterValue,
                                    field: col.dataField,
                                });
                            },
                        }),
                    });
                }
            } else {
                cols.push({
                    ...col,
                });
            }
        }

        if (!config.footer) {
            if (cols && cols.length > 0) {
                for (let i = 0; i < cols.length; i++) {
                    if (cols && cols[i].footer) {
                        cols[i].footer = false;
                    }
                }
            }
        } else if (cols && cols.length > 0) {
            for (let i = 0; i < cols.length; i++) {
                if (cols) {
                    cols[i].footerStyle = config.footerStyle;
                    if (cols[i].footerType == "sum") {
                        let sum = 0;
                        if (data && data.length > 0) {
                            for (let c = 0; c < data.length; c++) {
                                let amount = data[c][cols[i].dataField];
                                if (amount) {
                                    if (typeof amount != 'number') {
                                        const specialChars = "'\"\\,./`";
                                        const isSpecChar = checkSpecialChars(specialChars, amount);

                                        if (isSpecChar) {
                                            amount = amount.replaceAll("'", "")
                                                .replaceAll("-", 0);
                                        }
                                    }
                                    if (amount === '-') {
                                        amount = 0
                                    }

                                    sum += parseInt(amount);
                                }
                            }
                        }
                        cols[i].footer = sum.toLocaleString().replace(/,/g, "'") || "0";
                    }
                    if (cols[i].footerType == 'empty') {
                        cols[i].footer = '';
                    }
                }
            }
        }

        return cols;
    };

    const checkSpecialChars = (specialChars, string) => {
        for (let i = 0; i < specialChars.length; i++) {
            if (string.indexOf(specialChars[i]) > -1) {
                return true;
            }
        }
        return false;
    };

    const handlerOnSelect = (row, isSelect, rowIndex, e) => {
        onSelect?.(row, isSelect, rowIndex, e);
    };

    const handlerOnSelectAll = (isSelect, rows, e) => {
        onSelectAll?.(isSelect, rows, e);
    };

    const selectRow = selectMode ? {
        mode: selectMode,
        clickToSelect: true,
        hideSelectColumn: selectMode ? !isSelect : true,
        selectColumnPosition: selectPosition,
        classes: "dtable-selected",
        style: noSelectRow ? {} : { backgroundColor: 'rgba(244, 81, 107, 0.5)' },
        onSelect: (row, isSelect, rowIndex, e) => {
            handlerOnSelect(row, isSelect, rowIndex, e);
        },
        onSelectAll: (isSelect, rows, e) => {
            handlerOnSelectAll(isSelect, rows, e);
        },
        clickToEdit: config.isTableEdit,
    } : {
        mode: 'radio',
        clickToSelect: true,
        classes: "",
        hideSelectColumn: selectMode ? !isSelect : true,
        clickToEdit: config.isTableEdit,
    };

    const expandRow = {
        renderer: row => expandable && row?.details?.length > 0 ? (
            <div style={{
                paddingLeft: 50
            }}>
                <DTable
                    config={detailConfig}
                    columns={detailColumns}
                    data={row?.details}
                />
            </div>
        ) : null,
        showExpandColumn: expandable,
        expandColumnPosition: 'left',
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            return <i
                className={isAnyExpands ? "la la-minus-square" : "la la-plus-square"}
                style={{
                    fontSize: '30px',
                    color: '#5867DD',
                }}
            />
        },
        expandColumnRenderer: ({ expanded }) => {
            return <i
                className={expanded ? "la la-minus-square" : "la la-plus-square"}
                style={{
                    fontSize: '30px',
                    color: '#5867DD',
                }}
            />
        }
    };

    const cellEdit = cellEditFactory({
        mode: "click",
        blurToSave: config.blurToSave,
    });

    const handleColumnsToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleColumnsClose = () => {
        setOpen(false);
    };

    const customHandleToggleColumnVisibility = (dataField) => {
        const updateHiddenProperty = (column) => {
            if (column.hidden === undefined) {
                return true;
            } else {
                return !column.hidden;
            }
        };

        const newState = localColumns.map((column) => {
            if (column.dataField === dataField) {
                return {
                    ...column,
                    hidden: updateHiddenProperty(column)
                };
            }
            return column;
        });

        setLocalColumns(newState || []);
    };

    return (
        <PaginationProvider pagination={paginationFactory(pgOptions)}>
            {({ paginationProps, paginationTableProps }) => {
                // let pageTableProps = paginationTableProps;
                // if (config.showAllData) {
                //     pageTableProps.pagination.options.sizePerPage = sizePerPage;
                // }

                return (
                    <div style={config.tableMarginLess ? {} : { marginBottom: 15, marginTop: 15 }}>
                        <DndProvider backend={HTML5Backend}>
                            <ToolkitProvider
                                keyField="id"
                                data={getTableData()}
                                columns={getColumns(paginationProps)}
                                exportCSV={{

                                }}
                                columnToggle
                            >
                                {
                                    props => (
                                        <div>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: 10,
                                            }}>
                                                {
                                                    config.showLeftButton
                                                        ?
                                                        <button
                                                            className={config.leftButtonClassName}
                                                            style={config.leftButtonStyle}
                                                            onClick={onLeftButtonClick}
                                                        >
                                                            {
                                                                config.leftButtonIcon
                                                                    ?
                                                                    <>
                                                                        {config.leftButtonIcon}
                                                                        <span className='ml-2'>
                                                                            {config.leftButtonText}
                                                                        </span>
                                                                    </>
                                                                    :
                                                                    config.leftButtonText
                                                            }
                                                        </button>
                                                        : null
                                                }
                                                {
                                                    config.showSecondaryLeftButton
                                                        ?
                                                        <button
                                                            className={config.secondaryLeftButtonClassName}
                                                            style={config.secondaryLeftButtonStyle}
                                                            onClick={onSecondaryLeftButtonClick}
                                                        >
                                                            {
                                                                config.secondaryLeftButtonIcon
                                                                    ?
                                                                    <>
                                                                        {config.secondaryLeftButtonIcon}
                                                                        <span className='ml-2'>
                                                                            {config.secondaryLeftButtonText}
                                                                        </span>
                                                                    </>
                                                                    :
                                                                    // config.secondaryLeftButtonText
                                                                    <span className='ml-2'>
                                                                        {config.secondaryLeftButtonText}
                                                                    </span>
                                                            }
                                                        </button>
                                                        :
                                                        null
                                                }
                                                <SizePerPageDropdownStandalone
                                                    className={`custom-size-per-page btn-sizePP ${!config.showPagination ? 'height-0' : ''}`}
                                                    style={{
                                                        height: 33
                                                    }}
                                                    {...paginationProps}
                                                    sizePerPage={paginationProps.sizePerPage}
                                                    hidden={!config.showPagination}
                                                />
                                                <div className="w-100 text-right mx-1">
                                                    {
                                                        config.excelExport
                                                            ?
                                                            <MyExportCSV
                                                                columns={getColumns(paginationProps)}
                                                                data={getTableData()}
                                                                {...config}
                                                            />
                                                            : null
                                                    }
                                                    {
                                                        config.printButton
                                                            ?
                                                            <ReactToPrint
                                                                trigger={() => (
                                                                    <button
                                                                        className="btn m-btn--icon m-btn--icon-only btn-primary br-03 mx-1"
                                                                        style={{
                                                                            width: '33px',
                                                                            height: '33px',
                                                                            // justifyContent: 'center',
                                                                            // display: 'inline-flex',
                                                                            // alignItems: 'center'
                                                                        }}
                                                                    >
                                                                        <i
                                                                            className="la la-print"
                                                                            style={{
                                                                                fontSize: '22px',
                                                                                color: '#ffffff',
                                                                            }}
                                                                        />
                                                                    </button>
                                                                )}
                                                                content={() => tableRef.current}
                                                                onAfterPrint={() => config?.onAfterPrint}
                                                                onBeforePrint={() => config?.onBeforePrint}
                                                            />
                                                            : null
                                                    }
                                                    {
                                                        config.columnButton
                                                            ?
                                                            <CustomToggleList
                                                                anchorRef={anchorRef}
                                                                open={open}
                                                                handleToggle={handleColumnsToggle}
                                                                handleClose={handleColumnsClose}
                                                                onColumnToggle={customHandleToggleColumnVisibility}
                                                                columns={props.columnToggleProps.columns}
                                                            />
                                                            : null
                                                    }

                                                </div>
                                                {
                                                    config.showFilter && (
                                                        <Search
                                                            value={searchValue}
                                                            onSearch={handleSearch}
                                                            setter={value => {
                                                                setSearchValue(value || '')
                                                                if (!value) {
                                                                    getUserInteraction({}, '', date)
                                                                }
                                                            }}

                                                            onSubmit={(query) => {
                                                                if (query && query.length > 0) {
                                                                    handleSearch()
                                                                }
                                                            }}
                                                            locale={locale}
                                                        />
                                                        // <Search
                                                        //     value={searchValue}
                                                        //     onSearch={handleSearch}
                                                        //     setter={setSearchValue}
                                                        //     locale={locale}
                                                        // />
                                                    )
                                                }
                                            </div>
                                            <BootstrapTable
                                                {...paginationTableProps}
                                                {...props.baseProps}
                                                ref={tableRef}
                                                keyField="id"
                                                striped={config?.isTableStriped}
                                                wrapperClasses={`table-responsive ${wrapperClassName}`}
                                                classes={`table custom-dt ${className}`}
                                                remote={remote}
                                                data={getTableData()}
                                                columns={getColumns(paginationProps)}
                                                onTableChange={handleTableChange}
                                                noDataIndication={getNoDataText}
                                                defaultSorted={config.defaultSort}
                                                rowEvents={{ onContextMenu }}
                                                rowClasses={(row, e) => {
                                                    let cursor = 'cursor-default'
                                                    if (individualContextMenus) {
                                                        if (row?.contextMenuKeys) cursor = 'cursor-context-menu'
                                                    }
                                                    else if (contextMenus?.length) cursor = 'cursor-context-menu'
                                                    return `dt-row-${row.id} ${cursor}`;
                                                }}
                                                selectRow={selectRow}
                                                expandable={expandable}
                                                expandRow={expandRow}
                                                filter={filterFactory()}
                                                cellEdit={cellEdit}
                                                bootstrap4
                                                rowStyle={rowStyle}
                                                sort={{
                                                    sortFunc: (a, b, order) => {
                                                        if (order === 'asc')
                                                            return a?.toString()?.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
                                                        else if (order === 'desc')
                                                            return b?.toString()?.localeCompare(a, undefined, { numeric: true, sensitivity: 'base' })
                                                    }
                                                }}
                                            >
                                            </BootstrapTable>
                                        </div>
                                    )
                                }
                            </ToolkitProvider>
                        </DndProvider>
                        {config.showPagination && (
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    {
                                        locale == 'mn'
                                            ? <div style={{ color: '#62646E', fontWeight: 500, fontSize: 14 }}>
                                                {` Нийт ${paginationProps.totalSize} илэрцийн ${paginationProps.page == 1
                                                    ? 1
                                                    : ((paginationProps.sizePerPage * (paginationProps.page - 1)) + 1)
                                                    }-с
                                                ${paginationProps.totalSize < (paginationProps.sizePerPage * paginationProps.page)
                                                        ? paginationProps.totalSize
                                                        : paginationProps.sizePerPage * paginationProps.page
                                                    }-г харуулж байна.`}
                                            </div>
                                            : <div style={{ color: '#62646E', fontWeight: 500, fontSize: 14 }}>
                                                {`Displaying ${paginationProps.page == 1
                                                    ? 1
                                                    : (paginationProps.sizePerPage + 1)
                                                    }-${paginationProps.totalSize < (paginationProps.sizePerPage * paginationProps.page)
                                                        ? paginationProps.totalSize
                                                        : paginationProps.sizePerPage * paginationProps.page
                                                    } of ${paginationProps.totalSize} results`}
                                            </div>
                                    }
                                    {/* <div style={{color: '#000', fontWeight: 500}}>{`${t(locale).action.total} ${paginationProps.totalSize} ${t(locale).action.value}`}</div> */}
                                </div>
                                <PaginationLinks paginationProps={paginationProps} />
                            </div>
                        )}
                    </div>
                )
            }
            }
        </PaginationProvider>
    );
};

export default Table;
