import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import RowPost from '../../Components/RowPost/RowPost'
import { originals,trending,action,drama,familly,fantacy,history,horror,music, tvMmovie,thriller} from '../../urls'
import { adventure,animation ,comedy,crime,documentary,mystery,scienceFiction,romance,war,western} from '../../urls'
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <RowPost title='Treanding Movies' url={trending} />
   
      <RowPost title='Action Movies' isSmall={true} url={action} />


      <RowPost title='Adventure Movies' isSmall={true} url={adventure} />
      <RowPost title='Animation Movies' isSmall={true} url={animation} />
      <RowPost title='Comedy Movies' isSmall={true} url={comedy} />
      <RowPost title='Crime Movies' isSmall={true} url={crime} />
      <RowPost title='Documentary Movies' isSmall={true} url={documentary} />
      <RowPost title='Drama Movies' isSmall={true} url={drama} />
      <RowPost title='Family Movies' isSmall={true} url={familly} />
      <RowPost title='Fantacy Movies' isSmall={true} url={fantacy} />
      <RowPost title='Hisotry Movies' isSmall={true} url={history} />
      <RowPost title='Horror Movies' isSmall={true} url={horror} />
      <RowPost title='Mystery Movies' isSmall={true} url={mystery} />
      <RowPost title='Sciencefiction Movies' isSmall={true} url={scienceFiction} />
      <RowPost title='Romance Movies' isSmall={true} url={romance} />
      <RowPost title='Thriller Movies' isSmall={true} url={thriller} />
      <RowPost title='War Movies' isSmall={true} url={war} />
      <RowPost title='Western Movies' isSmall={true} url={western} />
      <RowPost title='TV Movies' isSmall={true} url={tvMmovie} />
      <RowPost title='Music Movies' isSmall={true} url={music} />
    </div>
  )
}

export default Home
