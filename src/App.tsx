import React, { useEffect } from 'react'
import './App.css'

interface IProps {
    test: string
}

function App(props: IProps) {
    useEffect(() => {
        console.log(props)
        console.log('aaa')
    }, [])
    return (
        <div className="App">
            <div>aa</div>dsafds
            <div>bb dsafdsaf</div>
        </div>
    )
}

export default App
