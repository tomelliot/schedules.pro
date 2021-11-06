import clsx from 'clsx';
import * as React from 'react';
import * as CityTimezones from 'city-timezones';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import Layout from '@/components/layout/Layout';
import Button from '@/components/buttons/Button';
import Row from '@/components/grid/Row';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const fullCityList = CityTimezones.cityMapping;
  fullCityList.map((el, i)=>{el["id"]=i; el["name"]=el.city + ", " + el.country});
  const [mode, setMode] = React.useState('light');
  const [activeCityIds, setActiveCityIds] = React.useState([593, 2696])
  const nbRows = activeCityIds.length;

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    if (nbRows >= 10)
    {
      console.log("already got the max number of cities, sorry!")
    } else {
      setActiveCityIds([...activeCityIds, item.id])
    }
    console.log(activeCityIds)
  }

  function getNbRowsClassName() {
    return ('grid-rows-' + nbRows);
  }

  const highlightTimeslot = (hover, col) => {
    if (hover) {
      document.querySelectorAll("#col"+col).forEach((a)=>a.classList.add("bg-blue-200"));
    } else {
      document.querySelectorAll("#col"+col).forEach((a)=>a.classList.remove("bg-blue-200"));
    }
  }

  const removeActiveCity = (cityId) => {
    setActiveCityIds(activeCityIds.filter(l => l != cityId))
  }

  const deleteThisRow = (cityId) => {
    console.log('deleting city: '+ fullCityList[cityId].city);
    removeActiveCity(cityId);
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
      <section className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-gray-50')}>
          <div className='flex flex-col pt-24 items-center min-h-screen text-center layout'>
            <h1>schedules.pro</h1>

            <div className='card'>
              <div className={clsx("grid grid-cols-1 text-center grid-flow-col", 'grid-rows-'+nbRows+1)}>
                <Row rowNb='1'
                  cityData={nbRows >= 1 ? fullCityList[activeCityIds[0]] : ""}
                  cityId={activeCityIds[0]}
                  disabled={nbRows < 1}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='2'
                  cityData={nbRows >= 2 ? fullCityList[activeCityIds[1]] : ""}
                  cityId={activeCityIds[1]}
                  disabled={nbRows < 2}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='3'
                  cityData={nbRows >= 3 ? fullCityList[activeCityIds[2]] : ""}
                  cityId={activeCityIds[2]}
                  disabled={nbRows < 3}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='4'
                  cityData={nbRows >= 4 ? fullCityList[activeCityIds[3]] : ""}
                  cityId={activeCityIds[3]}
                  disabled={nbRows < 4}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='5'
                  cityData={nbRows >= 5 ? fullCityList[activeCityIds[4]] : ""}
                  cityId={activeCityIds[4]}
                  disabled={nbRows < 5}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='6'
                  cityData={nbRows >= 6 ? fullCityList[activeCityIds[5]] : ""}
                  cityId={activeCityIds[5]}
                  disabled={nbRows < 6}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='7'
                  cityData={nbRows >= 7 ? fullCityList[activeCityIds[6]] : ""}
                  cityId={activeCityIds[6]}
                  disabled={nbRows < 7}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='8'
                  cityData={nbRows >= 8 ? fullCityList[activeCityIds[7]] : ""}
                  cityId={activeCityIds[7]}
                  disabled={nbRows < 8}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='9'
                  cityData={nbRows >= 9 ? fullCityList[activeCityIds[8]] : ""}
                  cityId={activeCityIds[8]}
                  disabled={nbRows < 9}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='10'
                  cityData={nbRows >= 10 ? fullCityList[activeCityIds[9]] : ""}
                  cityId={activeCityIds[9]}
                  disabled={nbRows < 10}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <div className={clsx("bg-blue-100 col-start-1 row-start-"+nbRows+1)}>
                <ReactSearchAutocomplete
                            items={fullCityList}
                            onSelect={handleOnSelect}
                            autoFocus
                            placeholder="Search for a city..."
                            maxResults={3}
                            styling={{color: "#1f2937",
                                      backgroundColor: "none",
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
