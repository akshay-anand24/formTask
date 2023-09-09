"use client";

import Link from "next/link";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./page.module.css";
import { createContext } from "react";

// import Button from '@mui/material/Button'
import { useForm, Controller } from "react-hook-form";

import style from "./styl.module.css";
// import {TextField,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import { Button } from "../components/ui/button";
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
import Conn from "./connect/page";

const connContext = createContext();

const Index = () => {
  let [rid, setRId] = useState("");
  let [prof, setProf] = useState("");
  let [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
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
        newdata,
      }
    );

    const path = res.data.referenceId;
    console.log(res);
    if (res.data.code === 200) {
      switch (res.data.statusCode) {
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
          router.push("/connect");
        }
      }
    } else {
      router.push("/find/"+path);
      setLoading(false);
    }
  };

  useEffect(() => {
    let nw = document.getElementById("nw");
    if (nw) nw.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
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
          }}
        >
          <ClipLoader
            color={"000010"}
            loading={loading}
            cssOverride={{
              opacity: 1,
              color: "white",
              position: "fixed",
              zIndex: 2,
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

      <div className={" text-4xl text-center m-10"}>Signup Form</div>
      <h3 style={{ float: "right" }}>
        <Link href={"/find"}>Find Status</Link>
      </h3>
      <form className={style.form} onSubmit={handleSubmit(handleSubmitHandler)}>
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
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female employed">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        {errors.gender ? <p>Invalid {console.log(errors.gender)}</p> : null}

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
                  <SelectItem value="self employed">Self Employed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.profession && <>Invalid</>}

        <Input
          id=""
          placeholder="Income"
          className="mt-7"
          {...register("income", { pattern: /^[0-9]+$/, required: true })}
        />
        {/* <Input
          id=""
          placeholder="IMEI"
          className="mt-7"
          {...register("imei", { required: true })}
        /> */}

        {/* <Select
          {...register("company", { required: true })}
          onValueChange={(e) => {
            setValue("company", e);
          }}
        >
          <SelectTrigger className="w-[100%] mt-7">
            <SelectValue placeholder="Select a company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="krazybee">krazybee</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
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

        {/* <TextField
  id=""
  label="Referende Id"
  sx={{width:'100%',mt:5,}}
  {...register('rid',{required:true,minLength:12,maxLength:16})}
  
/> */}
        {/* <FormControl sx={{ mt:5 , minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Company</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          label='company'
          // value={age}
          // onChange={}
          autoWidth
          {...register('company',{required:true})}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'kreditbee'}>KreditBee</MenuItem>
         
        </Select>
      </FormControl> */}
        {errors.company && <p>{errors.company.message}</p>}

        {/* <TextField
  id=""
  label="Campaign"
  sx={{width:'100%',mt:5,}}
  {...register('campaign')}
  
/>
      <TextField
  id=""
  label="Key1"
  sx={{width:'100%',mt:5,}}
  {...register('key1')}
  
/>
      <TextField
  id=""
  label="Key2"
  sx={{width:'100%',mt:5,}}
  {...register('key2')}
  
/> */}

        <Button
          variant="outline"
          className="my-7 bg-zinc-950 text-white hover:bg-zinc-700 hover:text-white active:bg-red-600"
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </form>
      {rid ? (
        <>
          <h1 id="nw" style={{ textAlign: "center", color: "green" }}>
            Your Reference ID is: {rid}
          </h1>
          <div>Save the Reference ID for future reference</div>
        </>
      ) : null}
    </>
  );
};

export default Index;
