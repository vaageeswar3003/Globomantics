import React from 'react';
import {useState} from "react";
import emailjs from 'emailjs-com';

const Inquiry = () => {

    const [contactInfo,setContactInfo]= useState( { 
        name: "",
        email:"",
        remarks:""
    }
    );

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(contactInfo);

        // serviceid, templateid,e.target, userid
        emailjs.sendForm('service_8jflh0e','template_8q8m285',e.target,'user_3y5mkQUPnNjuFX1658dy1')
        .then( (result) => { 
            //console.log(result.text);
            console.log(result);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();

    };


    return (
        <form className="mt-2" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name"> Name  </label>
                <input  id="name" type="text" 
                placeholder="Name"
                value={contactInfo.name}
                onChange={onChange}
                className="form-control"
                name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                value={contactInfo.email}
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks  </label>
                <input id="remarks" type="text"
                value={contactInfo.remarks}
                className="form-control"
                placeholder="Remarks"
                name="remarks"
                onChange={onChange}/>
            </div>
            <input type="submit" className="btn btn-primary mt-2"
            disabled={ !contactInfo.name || !contactInfo.email }
            value="submit"/> 
            
        </form>
    );
};

export default Inquiry;