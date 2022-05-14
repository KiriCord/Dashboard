import * as React from 'react';
import MUIDataTable from "mui-datatables";
import { DictelemsProps } from '@renderer/types';

const columns = ["Ид", "Полное имя"];

const options = {
    textLabels: {
        body: {
            noMatch: "К сожалению, подходящие записи не найдены",
            toolTip: "Сортировать",
            columnHeaderTooltip: (column: any) => `Сортировать по ${column.label}`
        },
        pagination: {
            next: "Следующая страница",
            previous: "Предыдущая страница",
            rowsPerPage: "Строк на странице:",
            displayRows: "из",
        },
        toolbar: {
            search: "Поиск",
            downloadCsv: "Загрузить CSV",
            print: "Печать",
            viewColumns: "Просмотр столбцов",
            filterTable: "Список фильтров",
        },
        filter: {
            all: "Все",
            title: "ФИЛЬТРЫ",
            reset: "СБРОСИТЬ",
        },
        viewColumns: {
            title: "Показать столбцы",
            titleAria: "Показать/скрыть столбцы таблицы",
        }
    },
    print: true,
    selectableRows: "none",
    selectableRowsHeader: false,
    download: true,
    pagination: false,
};

export default function DataTables(props: DictelemsProps) {

    const id = props.dataDictelems.map(item => item["id"]);
    const name = props.dataDictelems.map(item => item["name"]);


    let data = id.map((item, index) => {
        return [item, name[index]]
    });

    return (
        <MUIDataTable
            title={`Таблица Dictelems`}
            data={data}
            columns={columns}
            //@ts-ignore
            options={options}
        />
    );
}