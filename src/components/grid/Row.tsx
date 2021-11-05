import clsx from 'clsx';
import * as React from 'react';


export default function Row({rowNb,
  disabled}) {
  const [padding, setPadding] = React.useState(150);

  return ([
    <div className={clsx("transform h-16 col-span-1 col-start-1 row-span-1 bg-red-100 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col1">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-2 row-span-1 items-center...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col2">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-3 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col3">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-4 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col4">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-5 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col5">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-6 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col6">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-7 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col7">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-8 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col8">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-9 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col9">row { rowNb }</div>,
    <div className={clsx("transform col-span-1 col-start-10 row-span-1 ...", "row-start-"+rowNb, "group-hover:scale-"+padding, "group-hover:text-gray-100")}
         style={{display: disabled ? 'block' : 'none' }}
         key="col10">row { rowNb }</div>,
  ]);
}
