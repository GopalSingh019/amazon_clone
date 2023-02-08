import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddressForm({open,close}) {
    const [country,setCountry]=useState();
    const formik=useFormik({
        initialValues:{fullname:'',mob:'',pin:'',flat:'',area:'',landmark:'',country:''},
        validationSchema:Yup.object({
            fullname:Yup.string().required('Enter Full Name'),
            mob:Yup.number('Enter Moile/Phone Number').max(9999999999,'Enter Correct Mobile Number').min(1000000000,'Enter Correct Mobile Number').required('Enter Mobile Number'),
            pin:Yup.number('Enter Pin Code').max(999999,'Enter Pin lss Code').min(100000,'Enter Pin mor Code').required('Enter PiN Code'),
            flat:Yup.string().required('Enter Address Detail'),
            area:Yup.string().required('Enter Address Detail'),
            landmark:Yup.string().required('Enter Landmark')
        }),
        onSubmit:(values,{setSubmitting})=>{
            alert(JSON.stringify(values));
            close();
        }
      })

    //   useEffect(()=>getAllCountry(),[]);
    //   const getAllCountry=()=>{fetch('http://country.io/names.json',{mode:'no-cors'}).then(res=>res.json()).then(data=>setCountry(data))};
    //   console.log(country);
    return (
        <div>
            <Modal
                open={open}
                
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            ><div className='boxModal'>
                    <h1>Enter a delivery address</h1>
                    <form>
                        <TextField variant='outlined' label="Full Name" value={formik.values.fullname} name="fullname" onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.fullname && formik.errors.fullname} helperText={formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname:null}/>
                        <TextField variant='outlined' label="Mobile number" name="mob" value={formik.values.mob} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.mob && formik.errors.mob} helperText={formik.touched.mob && formik.errors.mob ? formik.errors.mob:null}/>
                        <TextField variant='outlined' label="Pincode" name="pin" value={formik.values.pin}  onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.pin && formik.errors.pin} helperText={formik.touched.pin && formik.errors.pin ? formik.errors.pin:null}/>
                        <TextField variant='outlined' label="Flat, House no., Building, Company, Apartment" value={formik.values.flat} name="flat" onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.flat && formik.errors.flat} helperText={formik.touched.flat && formik.errors.flat ? formik.errors.flat:null}/>
                        <TextField variant='outlined' label="Area, Street, Sector, Village" name="area" value={formik.values.area} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.area && formik.errors.area} helperText={formik.touched.area && formik.errors.area ? formik.errors.area:null}/>
                        <TextField variant='outlined' label="Landmark" name="landmark" value={formik.values.landmark} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.landmark && formik.errors.landmark} helperText={formik.touched.landmark && formik.errors.landmark ? formik.errors.landmark:null}/>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formik.values.country}
                                label="Age"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}

                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            <Button variant="contained" color="primary" onClick={formik.handleSubmit}>Save Address</Button>
                            {/* <Button variant="outlined" color="primary">Close</Button> */}
                        </div>
                    </form>
                </div></Modal>
        </div>
    )
}

export default AddressForm