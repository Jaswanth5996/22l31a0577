import React from 'react'   
import { useState,useEffect } from 'react';
import './urlStyle.css'
import axios from 'axios';

const Url = () => {
    const [url,setUrl] = useState('');
    const [expiry,setExpiry] = useState('');
    const [code,setCode] = useState('');
    const [shorturl,setShorturl] = useState('');
    const [copy,setCopy] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/shorturls", { url,expiry,code });
            setShorturl(response.data.short);
            setCopy(false);
            const existingUrls = JSON.parse(localStorage.getItem("urls")) || [];
            localStorage.setItem("urls", JSON.stringify([...existingUrls, response.data.short]));
        }catch(err){
            console.error("Server Error", err);
        }
    }

    const handleCopy = async()=>{
        try{await navigator.clipboard.writeText(shorturl);
            setCopy(true)
        }
        catch(err){
            console.error("Failed to copy", err);
        }
        
    }

    return (
        <div className="container">
            <form action="" className="form" onSubmit={handleSubmit}>
                <legend className='legend'>URL Shortener</legend>
                <input type="url" required className="urlinput" value={url} placeholder='Enter Url' onChange={(e) => setUrl(e.target.value)} />
                <input type="text" className="urlinput" value={code} placeholder="ShortCode for URL(Optional)" onChange={(e) => setCode(e.target.value)} />
                <input type="number" className="urlinput" value={expiry} placeholder="Expiry in Hours(Optional)" onChange={(e) => setExpiry(e.target.value)} />
                <button type="submit" className='button'>Get Short URL</button>
            </form>
            {shorturl && (
                <div className="display">
                    <div className="">Your Shortened URL is : <span className='resulturl'>{shorturl}</span></div>
                    <div className="">
                    {copy ?
                    <span className='copied'>Copied!</span>
                     : <button className='copy' onClick={handleCopy}>Copy</button>}
                    </div>
                </div>
            )}
        </div> 
    )
}

export default Url;