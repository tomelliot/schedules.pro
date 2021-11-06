import clsx from 'clsx';
import * as React from 'react';

export default class Row extends React.Component {
  constructor (props){
    super(props);
  }

  render() {
    return (<div
          className={clsx("transform h-16 group grid grid-cols-9 grid-rows-1 text-center grid-flow-col bg-blue-100 col-start-1", "row-start-"+this.props.rowNb)}
          style={{display: this.props.disabled ? 'none' : 'grid' }}>
            <div className={clsx("transform col-span-1 col-start-1 row-span-1  row-start-1 bg-red-100 ...", "group-hover:scale-120")}
                 id="col1"
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }: { this.props.rowLabel }
                 </div>
            <div className={clsx("transform scale-75 col-span-1 col-start-2 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col2"
                 onMouseEnter={()=>this.props.highlightColumn(true, 2)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 2)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-3 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col3"
                 onMouseEnter={()=>this.props.highlightColumn(true, 3)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 3)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-4 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col4"
                 onMouseEnter={()=>this.props.highlightColumn(true, 4)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 4)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-5 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col5"
                 onMouseEnter={()=>this.props.highlightColumn(true, 5)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 5)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-6 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col6"
                 onMouseEnter={()=>this.props.highlightColumn(true, 6)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 6)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-7 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col7"
                 onMouseEnter={()=>this.props.highlightColumn(true, 7)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 7)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-8 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col8"
                 onMouseEnter={()=>this.props.highlightColumn(true, 8)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 8)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
            <div className={clsx("transform col-span-1 col-start-9 row-span-1  row-start-1 ...", "group-hover:scale-120")}
                 id="col9"
                 onMouseEnter={()=>this.props.highlightColumn(true, 9)}
                 onMouseLeave={()=>this.props.highlightColumn(false, 9)}
                 onClick={()=>this.props.deleteRow(this.props.cityId)}>
                 row { this.props.rowNb }</div>
  </div>)};
}
