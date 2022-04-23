import React from 'react'
import './css/homepage.css'
import unidata from './univ.json'

function HomePage({searchingTerm}) {
  const [searchTerm , setSearchTerm] = React.useState("");

  return (
    <div className='container'>
        <div className='sidebar'>
              <div className='title'>
                <span style={{fontSize:'20px',
                fontWeight:'bold',
                color:'rgb(100,100,100)',

                }}>
              Most Popular</span>
              </div>
              <div className='content'>
                <span>Harvard University</span>
                <span>Kathmandu University</span>
                <span>Oxford University</span>
                <span>Pokhara University</span>
              </div>

              <div className='title'>
                <span style={{fontSize:'20px',
                fontWeight:'bold',
                color:'rgb(100,100,100)',

                }}>
              Most Searched</span>
              </div>
              <div className='content'>
                <span>ABC University</span>
                <span>PQR University</span>
                <span>XYZ University</span>
              </div>

              <div className='title'>
                <span style={{fontSize:'20px',
                fontWeight:'bold',
                color:'rgb(100,100,100)',

                }}>
              Highest Rated</span>
              </div>
              <div className='content'>
              <span>ABC University</span>
                <span>PQR University</span>
                <span>XYZ University</span>
              </div>
              <div className='title'>
                <span style={{fontSize:'20px',
                fontWeight:'bold',
                color:'rgb(100,100,100)',

                }}>
              Most Searched</span>
              </div>
              <div className='content'>
              <span>ABC University</span>
                <span>PQR University</span>
                <span>XYZ University</span>
                <span>OK University</span>
              </div>

              <div className='title'>
                <span style={{fontSize:'20px',
                fontWeight:'bold',
                color:'rgb(100,100,100)',

                }}>
              Most Searched</span>
              </div>
              <div className='content'>
              <span>ABC University</span>
                <span>PQR University</span>
                <span>XYZ University</span>
                              </div>

              <div className='title'>
                <span style={{fontSize:'20px',
                fontWeight:'bold',
                color:'rgb(100,100,100)',

                }}>
              Most Searched</span>
              </div>
              <div className='content'>
              <span>ABC University</span>
                <span>PQR University</span>
                <span>XYZ University</span>
                <span>OK University</span>
              </div>
              
        </div>


        <div className='middle'>
                <div className="searchbar">
                <input
                    type="text"
                    placeholder='Search for universities...'
                    onChange={(event) =>{
                    setSearchTerm(event.target.value)
                    }
                    }
                  /> 
                  </div>
                <div className='searchme'>
                
                  <div className="display">
                    {unidata.filter((val)=>{
              if(searchTerm===""){
                return(
                <div className='forflexonly'>  
               <div className='card'>
                    <img
                    src={val.image}
                    alt='uni-images'                     
                    />
                    <div className='desc'>
                      <span style={{
                        fontSize:'24px',
                        fontWeight:'bold',
                        textDecoration:'underline',
                      }}> {val.name}</span><br/>
                      <span style={{
                        fontSize:'18px',
                          
                      }}>{val.location}</span><br/><br/>
                      <span style={{
                      }}>{val.short_desc}<br/>Click for more details...</span>
                    </div>
                  </div>
                  </div>
                      )
            }  
            else if(
                 val.name.toLowerCase().includes(searchTerm.toLowerCase())  
                      )
                      {
                return val;
                       }                  
          }).map(val=>{
                        return(
                  <div className='forflexonly'>  
                 <div className='card'>
                      <img
                      src={val.image}
                      alt='uni-images'                     
                      />
                      <div className='desc'>
                        <span style={{
                          fontSize:'24px',
                          fontWeight:'bold',
                          textDecoration:'underline',
                        }}> {val.name}</span><br/>
                        <span style={{
                          fontSize:'18px',
                            
                        }}>{val.location}</span><br/><br/>
                        <span style={{
                        }}>{val.short_desc}<br/>Click for more details...</span>
                      </div>
                    </div>
                    </div>
                        )
                      })
                    }
                </div>


                    </div>  
        </div>

                        <div className='rightbar'>
                          <div className='news'>
                            <span
                            style={{
                              fontSize:'22px',
                              
                              fontWeight:'bold'
                            }}>
                              Trending News
                            </span>
                          </div>
                          <div className='newshead'>
                            <li>Kathmandu University to start crytpo classes.</li>
                            <li>Pokhara University to stop existing.</li>
                            <li>Kathmandu University plans to do nothing.</li>
                            <li>Tribhuwan University to start cycling classes.</li>
                            <li>Kathmandu University to start teaching .</li>
                          </div>
                        </div>


        </div>
  )
}

export default HomePage;