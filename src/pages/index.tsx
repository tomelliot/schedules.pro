import clsx from 'clsx';
import * as React from 'react';
import * as CityTimezones from 'city-timezones';


import Layout from '@/components/layout/Layout';
import Button from '@/components/buttons/Button';
import Row from '@/components/grid/Row';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';


export default function HomePage() {
  let fullCityList = CityTimezones.cityMapping;
  fullCityList.map((el, i)=>{el["id"]=i});

  const [mode, setMode] = React.useState('light');
  const [activeCityIds, setActiveCityIds] = React.useState([593, 2696, 1, 2, 3, 4, 5, 6])
  let nbRows = activeCityIds.length;
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  function addRow() {
    if (nbRows < 10) {
      setNbRows(nbRows + 1);
    }
    console.log(nbRows);
  }

  function getNbRowsClassName() {
    return ('grid-rows-' + nbRows);
  }

  let highlightTimeslot = (hover, col) => {
    if (hover) {
      document.querySelectorAll("#col"+col).forEach((a)=>a.classList.add("bg-blue-200"));
    } else {
      document.querySelectorAll("#col"+col).forEach((a)=>a.classList.remove("bg-blue-200"));
    }
  }

  const removeActiveCity = (cityId) => {
    setActiveCityIds(activeCityIds.filter(l => l != cityId))
  }

  let deleteThisRow = (rowNb) => {
    console.log('deleting row number '+rowNb);
    console.log(CityTimezones.cityMapping);
    removeActiveCity(rowNb);
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
            <p className={clsx(
              'mt-2 text-sm',
            )}>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className='mt-2 text-sm'>
              <CustomLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </CustomLink>
            </p>

            <Button className='mt-6' href='/components'
              onClick={toggleMode}
              variant={mode === 'dark' ? 'light' : 'dark'}
            >
            Set to {mode === 'dark' ? 'light' : 'dark'}
            </Button>

            <Button className='mt-6' href='/components'
              onClick={addRow}
              variant={mode === 'dark' ? 'light' : 'dark'}
            >
            Add a row
            </Button>

            <p>{ nbRows }</p>
            <p>{clsx('row-span-'+nbRows)}</p>
            <div className='card bg-blue-100'>
              <div className={clsx("grid grid-cols-1 text-center grid-flow-col", 'grid-rows-'+nbRows)}>
                <Row rowNb='1'
                  rowLabel={nbRows >= 1 ? fullCityList[activeCityIds[0]].city : ""}
                  cityId={activeCityIds[0]}
                  disabled={nbRows < 1}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='2'
                  rowLabel={nbRows >= 2 ? fullCityList[activeCityIds[1]].city : ""}
                  cityId={activeCityIds[1]}
                  disabled={nbRows < 2}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='3'
                  rowLabel={nbRows >= 3 ? fullCityList[activeCityIds[2]].city : ""}
                  cityId={activeCityIds[2]}
                  disabled={nbRows < 3}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='4'
                  rowLabel={nbRows >= 4 ? fullCityList[activeCityIds[3]].city : ""}
                  cityId={activeCityIds[3]}
                  disabled={nbRows < 4}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='5'
                  rowLabel={nbRows >= 5 ? fullCityList[activeCityIds[4]].city : ""}
                  cityId={activeCityIds[4]}
                  disabled={nbRows < 5}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='6'
                  rowLabel={nbRows >= 6 ? fullCityList[activeCityIds[5]].city : ""}
                  cityId={activeCityIds[5]}
                  disabled={nbRows < 6}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='7'
                  rowLabel={nbRows >= 7 ? fullCityList[activeCityIds[6]].city : ""}
                  cityId={activeCityIds[6]}
                  disabled={nbRows < 7}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='8'
                  rowLabel={nbRows >= 8 ? fullCityList[activeCityIds[7]].city : ""}
                  cityId={activeCityIds[7]}
                  disabled={nbRows < 8}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='9'
                  rowLabel={nbRows >= 9 ? fullCityList[activeCityIds[8]].city : ""}
                  cityId={activeCityIds[8]}
                  disabled={nbRows < 9}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
                <Row rowNb='10'
                  rowLabel={nbRows >= 10 ? fullCityList[activeCityIds[9]].city : ""}
                  cityId={activeCityIds[9]}
                  disabled={nbRows < 10}
                  highlightColumn={(a,b)=>highlightTimeslot(a,b)}
                  deleteRow={(a)=>deleteThisRow(a)}>
                </Row>
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
