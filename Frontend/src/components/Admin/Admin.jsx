import React from "react";
import { useEffect } from "react";

function AdminRedirect() {
    useEffect(() =>{
        window.location.href = "http://localhost:5173";
    },[]);
    return null;
}
export default AdminRedirect;