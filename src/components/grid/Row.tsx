import clsx from 'clsx';
import * as React from 'react';
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { TrashIcon } from '@heroicons/react/outline'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline'

dayjs.extend(utc)
dayjs.extend(timezone)

export default class Row extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (<div
          className={clsx("transform h-16 grid grid-cols-9 grid-rows-1 text-center grid-flow-col col-start-1", "row-start-"+this.props.rowNb)}
          style={{display: this.props.disabled ? 'none' : 'grid' }}>
            <div className={clsx("group grid transform col-span-1 col-start-1 row-span-1 row-start-1 place-content-center ...")}
                 id="col1">
                <div className={clsx('grid grid-cols-3')}>
                  <div className={clsx('col-span-2')}>
                    { this.props.cityData.city }
                    <div className={clsx("font-tertiary text-sm")}>
                      { this.props.cityData.timezone }
                    </div>
                  </div>
                  <div className={clsx('w-3/5 h-3/5 col-span-1 text-red-200 cursor-pointer', "group-hover:text-red-400")}
                  onClick={()=>this.props.deleteRow(this.props.cityData.id)}>
                    <TrashIcon>
                    </TrashIcon>
                  </div>
                </div>
            </div>
            <div className={clsx("transform group col-span-1 col-start-2 row-span-1 row-start-1 place-content-center cursor-pointer ...", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col2"
                 onMouseEnter={()=>this.props.columnHovered(true, 2)}
                 onMouseLeave={()=>this.props.columnHovered(false, 2)}
                 onClick={()=>this.props.incrementTime(false)}>

                 <div className={clsx("flex relative w-full h-full items-center")}>
                   <div className={clsx("flex z-20 h-full w-full items-center justify-center")}>
                    { this.props.baseTime.subtract(3*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
                   </div>
                   <div className={clsx("flex z-10 absolute content-end text-blue-100 group-hover:text-blue-300", "left-chevrons")}>
                     <ChevronDoubleLeftIcon
                      height="50%"
                      width="50%">
                     </ChevronDoubleLeftIcon>
                   </div>
                 </div>
            </div>
            <div className={clsx("grid transform col-span-1 col-start-3 row-span-1 row-start-1 place-content-center cursor-pointer bg-blue-50 ...", this.props.rowNb==1 ? "rounded-t-lg" : "", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col3"
                 onMouseEnter={()=>this.props.columnHovered(true, 3)}
                 onMouseLeave={()=>this.props.columnHovered(false, 3)}
                 onClick={()=>this.props.incrementTime(false)}>
                 { this.props.baseTime.subtract(2*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
            </div>
            <div className={clsx("grid transform col-span-1 col-start-4 row-span-1 row-start-1 place-content-center cursor-pointer ...", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col4"
                 onMouseEnter={()=>this.props.columnHovered(true, 4)}
                 onMouseLeave={()=>this.props.columnHovered(false, 4)}
                 onClick={()=>this.props.incrementTime(false)}>
                 { this.props.baseTime.subtract(1*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
            </div>
            <div className={clsx("grid transform col-span-1 col-start-5 row-span-1 row-start-1 place-content-center bg-blue-50 ...", this.props.rowNb==1 ? "rounded-t-lg" : "", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col5"
                 onMouseEnter={()=>this.props.columnHovered(true, 5)}
                 onMouseLeave={()=>this.props.columnHovered(false, 5)}>
                 <div>
                  { this.props.baseTime.tz(this.props.cityData.timezone).format("HH:mm") }
                 </div>
                 <div>
                  { this.props.baseTime.tz(this.props.cityData.timezone).format("(DD MMM)") }
                 </div>
            </div>
            <div className={clsx("grid transform col-span-1 col-start-6 row-span-1 row-start-1 place-content-center cursor-pointer ...", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col6"
                 onMouseEnter={()=>this.props.columnHovered(true, 6)}
                 onMouseLeave={()=>this.props.columnHovered(false, 6)}
                 onClick={()=>this.props.incrementTime(true)}>
                 { this.props.baseTime.add(1*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
            </div>
            <div className={clsx("grid transform col-span-1 col-start-7 row-span-1 row-start-1 place-content-center cursor-pointer bg-blue-50 ...", this.props.rowNb==1 ? "rounded-t-lg" : "", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col7"
                 onMouseEnter={()=>this.props.columnHovered(true, 7)}
                 onMouseLeave={()=>this.props.columnHovered(false, 7)}
                 onClick={()=>this.props.incrementTime(true)}>
                 { this.props.baseTime.add(2*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
            </div>
            <div className={clsx("grid transform col-span-1 col-start-8 row-span-1 row-start-1 place-content-center cursor-pointer ...", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col8"
                 onMouseEnter={()=>this.props.columnHovered(true, 8)}
                 onMouseLeave={()=>this.props.columnHovered(false, 8)}
                 onClick={()=>this.props.incrementTime(true)}>
                 { this.props.baseTime.add(3*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
            </div>
            <div className={clsx("transform group col-span-1 col-start-9 row-span-1 row-start-1 place-content-center cursor-pointer bg-blue-50 ...", this.props.rowNb==1 ? "rounded-t-lg" : "", this.props.rowNb==this.props.nbRows ? "rounded-b-lg" : "")}
                 id="col9"
                 onMouseEnter={()=>this.props.columnHovered(true, 9)}
                 onMouseLeave={()=>this.props.columnHovered(false, 9)}
                 onClick={()=>this.props.incrementTime(true)}>

                 <div className={clsx("flex relative w-full h-full items-center")}>
                   <div className={clsx("flex z-20 h-full w-full items-center justify-center")}>
                    { this.props.baseTime.add(4*this.props.deltaTime,"m").tz(this.props.cityData.timezone).format("HH:mm") }
                   </div>
                   <div className={clsx("flex flex-row-reverse z-10 absolute place-content-end text-blue-100 group-hover:text-blue-300", "right-chevrons")}>
                     <ChevronDoubleRightIcon
                      height="50%"
                      width="50%">
                     </ChevronDoubleRightIcon>
                   </div>
                 </div>
            </div>
  </div>)};
}
