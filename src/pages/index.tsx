import clsx from 'clsx';
import * as React from 'react';

import * as Panelbear from "@panelbear/panelbear-js";
import * as CityTimezones from 'city-timezones';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import * as dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Layout from '@/components/layout/Layout';
import Row from '@/components/grid/Row';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const fullCityList = CityTimezones.cityMapping;
  fullCityList.map((el, i)=>{el["id"]=i; el["name"]=el.city + ", " + el.country});
  const [mode, setMode] = React.useState('light');
  const [activeCityIds, setActiveCityIds] = React.useState([593, 2696])

  React.useEffect(() => {
    let citiesIds = localStorage.getItem("citiesIds");
    if (citiesIds) {
        setActiveCityIds(JSON.parse(localStorage.getItem("citiesIds")));
    } else {
      localStorage.setItem("citiesIds", JSON.stringify(activeCityIds));
    }
  },[]);

  const nbRows = activeCityIds.length;
  const handleOnSelect = (item) => {
    // the item selected
    if (nbRows >= 10)
    {
      console.log("already got the max number of cities, sorry!")
    } else {
      setActiveCityIds([...activeCityIds, item.id])
      localStorage.setItem("citiesIds", JSON.stringify([...activeCityIds, item.id]));
    }
    Panelbear.track("new city: " + fullCityList[item.id]);
  }

  const highlightScrollArrows = (hover, col) => {
    const this_col = +col;
    let chevrons = null;
    if (+col > 5) {
      chevrons = document.querySelectorAll(".right-chevrons")
    } else if ((+col < 5) && (+col > 0)) {
      chevrons = document.querySelectorAll(".left-chevrons")
    }
    if (chevrons)
    {
      if (hover)
      {
        chevrons.forEach((a)=>a.classList.remove("text-blue-100"));
        chevrons.forEach((a)=>a.classList.add("text-blue-300"));
      } else {
        chevrons.forEach((a)=>a.classList.remove("text-blue-300"));
        chevrons.forEach((a)=>a.classList.add("text-blue-100"));
      }
    }
  }

  const removeActiveCity = (cityId) => {
    let newCityIds = activeCityIds.filter(l => l != cityId)
    setActiveCityIds(newCityIds)
    localStorage.setItem("citiesIds", JSON.stringify(newCityIds));
  }

  const deleteThisRow = (cityId) => {
    console.log('deleting city: '+ fullCityList[cityId].city);
    removeActiveCity(cityId);
  }

  const minsToRoundTo = 30;
  function incrementTime (increment) {
    if (increment) {
      setSelectedDayTime(selectedDayTime.add(minsToRoundTo, 'm'));
    } else {
      setSelectedDayTime(selectedDayTime.subtract(minsToRoundTo, 'm'));
    }
  }

  function roundTime (ts) {
    return ts.minute(minsToRoundTo*Math.floor(ts.minute()/minsToRoundTo))
  }

  function handleDayClick(day) {
    setSelectedDayTime(roundTime(selectedDayTime.year(day.getFullYear()).month(day.getMonth()).date(day.getDate())));
  }

  const [selectedDayTime, setSelectedDayTime] = React.useState(roundTime(dayjs(new Date())));
  return (

    <Layout>
      <Seo templateTitle='schedules.pro' />
      <Seo />

      <main>
      <section>
          <div className='flex flex-col pt-24 items-center min-h-screen text-center layout'>
            <h1 className={clsx('m-10')}>schedules.pro</h1>

            <div className='DayPickerWrapperDiv flex rounded p-5 items-center bg-blue-100'>
              <DayPickerInput
                onDayChange={handleDayClick}
                selectedDays={selectedDayTime}
                placeholder={selectedDayTime.format("YYYY-MM-DD")}/>
            </div>
            <div className='card'>
              <div className={clsx("grid grid-cols-1 text-center grid-flow-col", 'grid-rows-'+nbRows+1)}>
                <Row rowNb='1'
                  cityData={nbRows >= 1 ? fullCityList[activeCityIds[0]] : ""}
                  cityId={activeCityIds[0]}
                  disabled={nbRows < 1}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='2'
                  cityData={nbRows >= 2 ? fullCityList[activeCityIds[1]] : ""}
                  cityId={activeCityIds[1]}
                  disabled={nbRows < 2}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='3'
                  cityData={nbRows >= 3 ? fullCityList[activeCityIds[2]] : ""}
                  cityId={activeCityIds[2]}
                  disabled={nbRows < 3}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='4'
                  cityData={nbRows >= 4 ? fullCityList[activeCityIds[3]] : ""}
                  cityId={activeCityIds[3]}
                  disabled={nbRows < 4}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='5'
                  cityData={nbRows >= 5 ? fullCityList[activeCityIds[4]] : ""}
                  cityId={activeCityIds[4]}
                  disabled={nbRows < 5}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='6'
                  cityData={nbRows >= 6 ? fullCityList[activeCityIds[5]] : ""}
                  cityId={activeCityIds[5]}
                  disabled={nbRows < 6}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='7'
                  cityData={nbRows >= 7 ? fullCityList[activeCityIds[6]] : ""}
                  cityId={activeCityIds[6]}
                  disabled={nbRows < 7}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='8'
                  cityData={nbRows >= 8 ? fullCityList[activeCityIds[7]] : ""}
                  cityId={activeCityIds[7]}
                  disabled={nbRows < 8}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='9'
                  cityData={nbRows >= 9 ? fullCityList[activeCityIds[8]] : ""}
                  cityId={activeCityIds[8]}
                  disabled={nbRows < 9}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <Row rowNb='10'
                  cityData={nbRows >= 10 ? fullCityList[activeCityIds[9]] : ""}
                  cityId={activeCityIds[9]}
                  disabled={nbRows < 10}
                  columnHovered={(a,b)=>highlightScrollArrows(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}
                  incrementTime={(a)=>incrementTime(a)}
                  baseTime={selectedDayTime}
                  deltaTime={minsToRoundTo}>
                </Row>
                <div className={clsx("bg-blue-100 rounded mt-5 col-start-1 row-start-"+nbRows+1)}>
                  <ReactSearchAutocomplete
                              items={fullCityList}
                              onSelect={handleOnSelect}
                              autoFocus
                              placeholder="Add a new city..."
                              maxResults={5}
                              styling={{color: "#1f2937",
                                        backgroundColor: "#dbeafe",
                                        boxShadow: "none",
                                        border: "none"}}
                            />
                </div>
              </div>
            </div>

            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://www.tomelliot.net'>
                Tom Elliot
              </CustomLink> | <CustomLink href='https://github.com/tomelliot/schedules.pro'>
                View on Github
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
