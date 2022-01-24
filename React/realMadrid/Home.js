import React from 'react'
import Image from './Image'
import jerseyOne from './img/jersey_one.JPG'
import jerseyTwo from './img/jersey_two.JPG'
import jerseyThree from './img/jersey_three.JPG'

const Home = () => {

    const jerseys = [
        {source: jerseyOne,
        caption: 'white'},
        {source: jerseyTwo,
        caption: 'blue'},
        {source: jerseyThree,
        caption: 'green'}
    ]

    const jerseyStyle = {
        float: 'right',
        display: 'grid',
        gridTemplateColumns: '100px 100px 100px'
    }

    return (
        <div style={{width: '1000px'}}>
            <h1 className='page-title'>Real Madrid CF</h1>
            
            <div style={jerseyStyle}>
            {
                jerseys.map((jersey) => {
                    return (
                    <Image 
                        key={jersey.source}
                        source={jersey.source} 
                        caption={jersey.caption}
                    /> 
                    )
                    
                })
            }                
            </div>

            
            <p>
            <span style={{fontWeight: 'bold'}}>Real Madrid Club de Fútbol</span>, meaning Royal Madrid Football Club, 
            commonly referred to as Real Madrid, 
            is a Spanish professional football club based in Madrid.
            </p>
            <p>
            Founded on 6 March 1902 as Madrid Football Club, the club has traditionally worn a white 
            home kit since inception. The honorific title real is Spanish for "royal" and was bestowed 
            to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The 
            team has played its home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown 
            Madrid since 1947. Unlike most European sporting entities, Real Madrid's members 
            (socios) have owned and operated the club throughout its history.
            </p>
            <p>
            The club was estimated to be worth €3.8 billion ($4.2 billion) in 2019, and it was the second 
            highest-earning football club in the world, with an annual revenue of €757.3 million in 2019.
            The club is one of the most widely supported teams in the world.[8] Real Madrid is one of three 
            founding members of La Liga that have never been relegated from the top division since its inception in 1929, along with Athletic Bilbao and Barcelona. 
            The club holds many long-standing rivalries, most notably El Clásico with Barcelona and El Derbi Madrileño with Atlético Madrid.
            </p>
            <p>
            Real Madrid established itself as a major force in both Spanish and European football during the 1950s, winning five consecutive European Cups and reaching the 
            final seven times. This success was replicated in the league, which the club won five times in the space of seven years. This team, which included Alfredo Di Stéfano, 
            Ferenc Puskás, Francisco Gento, and Raymond Kopa, is considered by some in the sport to be the greatest team of all time.
            </p>
            <p>
            In domestic football, the club has won 66 trophies; a record 34 La Liga titles, 19 Copa del Rey, 11 Supercopa de España, a Copa Eva Duarte, and a Copa de la Liga.
             In European and worldwide competitions, Real Madrid have won a record 26 trophies; a record 13 European Cup/UEFA Champions League titles, two UEFA Cups and four UEFA Super Cups. 
             In international football, they have achieved a record seven club world championships.
            </p>
            <p>
            Real Madrid was recognised as the FIFA Club of the 20th Century on 11 December 2000 with 42.35% of the vote,[14] and received the FIFA Centennial Order of Merit on 20 May 2004.
            The club was also awarded Best European Club of the 20th Century by the IFFHS on 11 May 2010. In June 2017, the team succeeded in becoming the first club to win consecutive 
            Champions League titles, then made it three in a row and four in five seasons in May 2018, extending their lead atop the UEFA club rankings. 
            As of 2020, Real Madrid are ranked third behind Bayern Munich and Barcelona.
            </p>
        </div>
    )
}

export default Home
