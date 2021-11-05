import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Button from '@/components/buttons/Button';
import Row from '@/components/grid/Row';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [mode, setMode] = React.useState('light');
  const [nbRows, setNbRows] = React.useState(3);
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  function addRow() {
    if (nbRows < 10) {
      setNbRows(nbRows + 1);
    }
    console.log(nbRows);
  }

  function removeRow() {
    if (nbRows > 4) {
      setNbRows(nbRows - 1);
    }
    console.log(nbRows);
  }

  function getNbRowsClassName() {
    return ('grid-rows-' + nbRows);
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

            <Button className='mt-6' href='/components'
              onClick={removeRow}
              variant={mode === 'dark' ? 'light' : 'dark'}
            >
            Remove a row
            </Button>

            <p>{ nbRows }</p>
            <p>{clsx('row-span-'+nbRows)}</p>
            <div className='card'>
              <div className={clsx("grid grid-cols-10 text-center grid-flow-col bg-blue-100", 'grid-rows-'+nbRows)}>
                  { nbRows < 1 ? <Row rowNb='1'></Row> : <Row rowNb='1' disabled></Row> }
                  { nbRows < 2 ? <Row rowNb='2'></Row> : <Row rowNb='2' disabled></Row> }
                  { nbRows < 3 ? <Row rowNb='3'></Row> : <Row rowNb='3' disabled></Row> }
                  { nbRows < 4 ? <Row rowNb='4'></Row> : <Row rowNb='4' disabled></Row> }
                  { nbRows < 5 ? <Row rowNb='5'></Row> : <Row rowNb='5' disabled></Row> }
                  { nbRows < 6 ? <Row rowNb='6'></Row> : <Row rowNb='6' disabled></Row> }
                  { nbRows < 7 ? <Row rowNb='7'></Row> : <Row rowNb='7' disabled></Row> }
                  { nbRows < 8 ? <Row rowNb='8'></Row> : <Row rowNb='8' disabled></Row> }
                  { nbRows < 9 ? <Row rowNb='9'></Row> : <Row rowNb='9' disabled></Row> }
                  { nbRows < 10 ? <Row rowNb='10'></Row> : <Row rowNb='10' disabled></Row> }
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
