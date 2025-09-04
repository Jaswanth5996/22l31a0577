import React from 'react'
import { useState,useEffect } from 'react';
import './urlStyle.css'

const Url = () => {
    const [url,setUrl] = useState('');
    const [shorturl,setShorturl] = useState('');
    const [copy,setCopy] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/shorten", { url });
            setShorturl(response.data.newUrl);
        }catch(err){
            console.error("Server Error", err);
        }
    }

    const handleCopy = async()=>{
        try{await navigator.clipboard.writeText(url);
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
                <input type="url" className="urlinput" value={url} placeholder='Enter Url' onChange={(e) => setUrl(e.target.value)} />
                <input type="text" className="urlinput" value={url} placeholder="ShortCode for URL(Optional)" onChange={(e) => setUrl(e.target.value)} />
                <input type="number" className="urlinput" value={url} placeholder="Expiry in Hours(Optional)" onChange={(e) => setUrl(e.target.value)} />
                <button type="submit" className='button'>Get Short URL</button>
            </form>
            {shorturl && (
                <div className="display">
                    Your Shortened URL is : <span className='resulturl'>{shorturl}</span>
                    {copy ?
                    <span className='copied'>Copied!</span>
                     : <button className='copy' onClick={handleCopy}>Copy</button>}
                </div>
            )}
        </div>
    )
}

export default Url;