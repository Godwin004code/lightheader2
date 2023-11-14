import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const LightHeader = ({ logo, navLinks, buttons }) => {
    return (
        <BrowserRouter>
            <header className='lightHeader'>
               <div>
               {logo.type === "text" ? <h2>{logo.text}</h2> : <img style={{width: logo.width, height: logo.height}} src={logo.src} />}
               </div>
            

            
            <nav>
                <ul>
                {
                    navLinks.map((links) => {
                        return (
                            <li>
                                <Link to={links.path}>{links.label}</Link>
                            </li>
                        )
                    })
                }
                </ul>
            </nav>

            <div>
                {
                    buttons.map((button) => {
                        return (
                            <button onClick={button.action}>{button.label}</button>
                        )
                    })
                }
            </div>

            <Routes>
                {navLinks.map((links) => {
                    return (
                        <Route path={links.path} element={<links.page />} />
                    )
                })}
            </Routes>
            </header>
        </BrowserRouter>
    )
}

export default LightHeader