"use client";

import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./page.module.css";
import { createContext } from "react";

import { v4 } from "uuid";
import { useForm, Controller } from "react-hook-form";

import style from "./styl.module.css";

import { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GiArchiveRegister } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "../components/ui/select";
import { useRouter } from "next/navigation";
import Conn from "./error/page";
import { headers } from "@/next.config";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { duration } from "@mui/material";
AOS.init({duration:2000});

const connContext = createContext();
let rid = v4().split("-");
rid = rid[0] + rid[1] + rid[2] + rid[3];

const Index = () => {

const intro=()=>{
  return(
    <div data-aos='fade-up' data-aos-duration='3000'>
 <div className="text-xl text-green-600 m-2 text-center">
           <GiArchiveRegister className=" inline m-1"/>
           <AiOutlineArrowRight className=" inline m-1"/>
           <BsFillPenFill className=" inline m-1"/>
           <AiOutlineArrowRight className=" inline m-1"/>
           <BsFillClockFill className=" inline m-1"/>
           <AiOutlineArrowRight className=" inline m-1"/>
           <AiFillCreditCard className=" inline m-1"/>
      </div>

    <h1 className="text-3xl  m-8 mb-14 underline font-bold">Dear Customer, Please fill in basic information and we will check your loan eligibility and loan amount ASAP</h1>
    <h3 className="text-green-500 underline">Documents Required:</h3>
    <br />
    <br />
    <div className=" border-solid border-1 p-4 w-8/12 m-auto border-black cursor-pointer" style={{boxShadow:'0 0 5px 1px gray',minHeight:'40px'}}>
      <span><HiOutlineIdentification className="text-6xl m-0 mx-2 inline"/></span>
      <span className="hover:underline">Pan Card</span> </div>
    </div>
  )
}

  const personalDetail = () => {
    return (
      
      <div className="comp" style={{ display:'none'}} data-aos='fade-up' data-aos-duration='3000'>
     

        <h1 className=" text-3xl m-8 underline font-bold ">You are just two step away from checking your eligibilty for instant funds</h1>
        <Input
          id="mobile"
          placeholder="Mobile"
          {...register("mobile", {
            pattern: /^[0-9]+$/,
            required: true,
            minLength: 10,
          })}
        />
        {errors.mobile && <p> Invalid </p>}
        <Input
          id=""
          placeholder="Email"
          className="mt-7"
          {...register("email", {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
        />
        {errors.email && <p> Invalid </p>}

        <Input
          id=""
          placeholder="First Name"
          className="mt-7"
          {...register("fname", { required: true })}
        />
        <Input
          id=""
          placeholder="Last Name"
          className="mt-7"
          {...register("lname", { required: true })}
        />
      </div>
    );
  };

  const morePersonalDetails = () => {
    return (
      <div className="comp" style={{display:'none'}} data-aos-duration='3000'data-aos='fade-up'>
        <h1 className=" text-3xl m-8 underline font-bold ">Responsible lending, transparent terms, and support for your financial needs.</h1>

        <Controller
          name="gender"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              onValueChange={(e) => {
                field.onChange(e);
              }}
              defaultValue={field.value}
            >
              <SelectTrigger className="w-[100%] mt-7">
                <SelectValue placeholder="select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="M">Male</SelectItem>
                  <SelectItem value="F">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        {errors.gender ? <p>Invalid</p> : null}

        <Input
          type="date"
          id=""
          placeholder="DoB"
          className="mt-7"
          name="dob"
          {...register("dob", { required: true })}
        />

        <Input
          id=""
          placeholder="PinCode"
          className="mt-7"
          {...register("pincode", {
            pattern: /^[0-9]+$/,
            required: true,
            minLength: 6,
          })}
        />
        {errors.pincode && <p> Invalid </p>}
      </div>
    );
  };

  const financialDetails = () => {
    return (
      <div className="comp" style={{display:'none'}} data-aos-duration='3000'data-aos='fade-up'>
        <h1 className=" text-3xl m-8 underline font-bold ">Final Step to know your eligibility.</h1>
        
        <Controller
          name="profession"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              onValueChange={(e) => {
                field.onChange(e);
                setProf(e);
              }}
              defaultValue={field.value}
            >
              <SelectTrigger className="w-[100%] mt-7">
                <SelectValue placeholder="select a profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="salaried">salaried</SelectItem>
                  <SelectItem value="selfEmployed">Self Employed</SelectItem>
                  <SelectItem value="houseWife">House Wife</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.profession && <>Invalid</>}
        <Input
          id=""
          placeholder="Pan Card"
          className="mt-7"
          {...register("pancard", {
            minLength: 10,
            maxLength: 10,
            required: true,
          })}
        />

        <Input
          id=""
          placeholder="Monthly Income"
          className="mt-7"
          {...register("income", { pattern: /^[0-9]+$/, required: true })}
        />

        {prof === "salaried" ? (
          <Input
            id=""
            placeholder="Company Name"
            className="mt-7"
            {...register("company", {
              required: prof === "salaried" ? true : false,
            })}
          />
        ) : null}

        {errors.company && <p>{errors.company.message}</p>}
      </div>
    );
  };

  const [prof, setProf] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [page, setPage] = useState(0);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    reset,
  } = useForm();

  // let api = async (data) => {
  //   let result = await fetch("/api", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   result = await result.json();
  //   console.log(result);
  //   if (result.length) setRId(result[0].rid);
  //   else setRId(result.rid);

  //   reset();
  // };

  const handleSubmitHandler = async (data) => {
    setLoading(true);
    let newdata = {
      ...data,
      imei: "website",
      key1: "",
      key2: "",
      campaign: "",
    };

    const res = await axios.put(
      "https://lms29api.buynsta.com/main/eligible/kreditbee",
      {
        mobile: newdata.mobile,
        email: newdata.email,
        firstname: newdata.fname,
        lastname: newdata.lname,
        gender: newdata.gender,
        pan: newdata.pancard,
        dob: "2019-01-05",
        pincode: newdata.pincode,
        profession: newdata.profession,
        salary: newdata.income,
        imei: "website",
        referenceId: rid,
        company: newdata.company,
        campaign: "",
        key1: "",
        key2: "",
      },
      {
        headers: {
          Authorization: " Basic " + process.env.NEXT_PUBLIC_AUTHORIZATION_KEY,
        },
      }
    );
    console.log(res);
    const path = res.data.model ? res.data.model.referenceId : "";
    if (res.data.code === "200") {
      switch (res.data.model.statusCode) {
        case "A001": {
          setLoading(false);
          router.push("/find/" + path);
          break;
        }

        case "W001":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;

        case "R001":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;
        case "R002":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;
        case "R003":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;
        case "R004":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;
        case "R005":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;
        case "R006":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;
        case "R007":
          {
            setLoading(false);
            router.push("/find/" + path);
          }
          break;

        default: {
          setLoading(false);
          let searchParams = new URLSearchParams(res.data);
          searchParams = searchParams.toString();
          router.push("/error" + "?" + searchParams);
        }
      }
    } else {
      let searchParams = new URLSearchParams(res.data);
      searchParams = searchParams.toString();
      router.push("/error" + "?" + searchParams);
      setLoading(false);
    }
  };

  useEffect(() => {
    let nw = document.getElementById("nw");
    if (nw) nw.scrollIntoView({ behavior: "smooth" });
    let comp=document.getElementsByClassName('comp')
    let form= document.getElementById('form')
    if(page===1){
      setTimeout(()=>{form.style.transform='scale(1)'
      comp[0].style.display='block'
      comp[1].style.display='none'
      comp[2].style.display='none'
    },1000)
       
    
     
      form.style.transform='scale(0)'
    }
    else if(page===2){
      setTimeout(()=>{form.style.transform='scale(1)'
      comp[0].style.display='none'
      comp[1].style.display='block'
      comp[2].style.display='none'
    },1000)
       
    
     
      form.style.transform='scale(0)'
      
   
    }
    else if(page===3){
     
      setTimeout(()=>{form.style.transform='scale(1)'
   
      comp[0].style.display='none'
      comp[1].style.display='none'
      comp[2].style.display='block'
    },1000)
       
    
     
      form.style.transform='scale(0)'
      

    }
    else {
      setTimeout(()=>{form.style.transform='scale(1)'
   
      comp[0].style.display='none'
      comp[1].style.display='none'
      comp[2].style.display='none'
    },1000)
       
    
     
      form.style.transform='scale(0)'
     
    }
    
  }, [page]);

  


  return (
    <div style={{backgroundColor:'#D7E8D8',minHeight:'100vh',padding:0,margin:0,border:'.1px solid black'}}>
      {loading ? (
        <div
          style={{
            display: "block",
            position: "fixed",
            backgroundColor: "black",
            opacity: 0.3,
            width: "100%",
            height: "100%",
            transform: "translate(-50%,-50%)",
            left: "50%",
            top: "50%",
            zIndex: 199,
          }}
        >
          <ClipLoader
            color={"000010"}
            loading={loading}
            cssOverride={{
              opacity: 1,
              color: "white",
              position: "fixed",
              zIndex: 200,
              transform: "translate(-50%,-50%)",
              left: "43%",
              top: "43%",
            }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : null}

      

      <form id='form' style={{boxShadow:"0px 0px 7px 2px gray",padding:'50px 20px',border:'1px solid black',backgroundColor:'#ffffff',margin:'  100px auto ',transitionDuration:'1s'}}
        className="m-auto w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 "
        onSubmit={handleSubmit(handleSubmitHandler)}
      >
        {page===0&&intro()}
        {personalDetail()}
        { morePersonalDetails()}
        { financialDetails()}

        {page === 3 && (
          <Button
            variant="outline"
            className="my-7  hover:text-white active:bg-red-600 hover:bg-green-600
          w-full mx-0   md:w-6/12  lg:w-auto lg:mx-0 
          inline-block p-2 m-2 text-center bg-green-700 text-white rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 active:scale-100 "
            disabled={!isDirty || !isValid}
            
          >
            {" "}
            Submit
          </Button>
        )}

        {page !== 3 && (
          <div
            onClick={() => {
              setPage(page + 1);
            }}
            className="w-full mx-2 mt-10  md:w-6/12  lg:w-auto lg:mx-0 inline-block p-2 m-2 text-center bg-green-700 text-white rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 active:scale-100"
          >
            Next
          </div>
        )}
        {page !== 0 && (
          <div
            type="button"
            onClick={() => {
              setPage(page - 1);
            }}
            className=" w-full mx-2   md:w-6/12  lg:w-auto lg:mx-4 inline-block p-2 m-2 text-center bg-green-700 text-white rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 active:scale-100"
          >
            Back
          </div>
        )}
      </form>
    </div>
  );
};

export default Index;
