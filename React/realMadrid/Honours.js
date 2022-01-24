import React from 'react'
import Honour from './Honour'
import LiLiga from './img/la_liga.png'
import Copa from './img/copa.png'
import CopaSuper from './img/supercopa.png'
import Uefa from './img/uefa.png'
import UefaCup from './img/uefa_cup.png'
import UefaSuper from './img/uefa_super.png'

const Honours = () => {

    const honours = [
        {
            id: 0,
            source: undefined,
            competition: "Competition",
            number: "Number",
            season: "Seasons"
        },
        {
            id: 1,
            source: LiLiga,
            competition: "La Liga",
            number: 34,
            season: "1931–32, 1932–33, 1953–54, 1954–55, 1956–57, 1957–58, 1960–61, 1961–62, 1962–63, 1963–64, 1964–65, 1966–67, 1967–68, 1968–69, 1971–72, 1974–75, 1975–76, 1977–78, 1978–79, 1979–80, 1985–86, 1986–87, 1987–88, 1988–89, 1989–90, 1994–95, 1996–97, 2000–01, 2002–03, 2006–07, 2007–08, 2011–12, 2016–17, 2019–20"
        },
        {
            id: 2,
            source: Copa,
            competition: "Copa del Rey",
            number: 19,
            season: "1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1961–62, 1969–70, 1973–74, 1974–75, 1979–80, 1981–82, 1988–89, 1992–93, 2010–11, 2013–14"
        },
        {
            id: 3,
            source: CopaSuper,
            competition: "Supercopa de España",
            number: 12,
            season: "1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2019–20, 2021–22"
        },
        {
            id: 4,
            source: Uefa,
            competition: "UEFA Champions League",
            number: 13,
            season: "1955–56, 1956–57, 1957–58, 1958–59, 1959–60, 1965–66, 1997–98, 1999–2000, 2001–02, 2013–14, 2015–16, 2016–17, 2017–18"
        },
        {
            id: 5,
            source: UefaCup,
            competition: "UEFA Cup",
            number: 2,
            season: "1984–85, 1985–86"
        },
        {
            id: 6,
            source: UefaSuper,
            competition: "UEFA Super Cup",
            number: 4,
            season: "2002, 2014, 2016, 2017"
        },

    ]

    return (
        <>
            <h1 className='page-title'>Honours</h1>
            {
                honours.map((honour) => {
                    return <Honour key={honour.id} honour={honour} />
                })
            }       
        </>
    )
}

export default Honours
