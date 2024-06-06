"use client";

import Layout from "../../layout";
import Link from "next/link";
import Router from "next/router";
import validator from "validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import { schema } from "@/app/validation";
import FormField from "./formField";

interface Days {
  sunday: "SUN";
  monday: "MON";
  tuesday: "TUE";
  wednesday: "WED";
  thursday: "TR";
  friday: "FRI";
  saturday: "SAT";
}
export const Days = {
  sunday: "SUN",
  monday: "MON",
  tuesday: "TUE",
  wednesday: "WED",
  thursday: "TR",
  friday: "FRI",
  saturday: "SAT",
};

enum DineTypes {
  CAFE = "CAFE",
  BAR = "BAR",
}
const dineOptions = [
  { value: DineTypes.CAFE, label: "sit in" },
  { value: DineTypes.BAR, label: "bar" },
];

export default function CreateStore() {
  // const {
  //   register,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   getValues,
  // } = useForm({
  //   resolver: zodResolver(schema),
  //   defaultValues: {
  //     name: "",
  //     rating: "5",
  //     phoneNumber: "",
  //     instagramHandle: "",
  //     avatar: "",
  //     images: "",
  //     serviceTypes: {
  //       sitIn: [dineOptions[0]],
  //       takeOut: { value: false, label: "No" },
  //       delivery: { value: false, label: "No" },
  //       curbsidePickup: { value: false, label: "No" },
  //     },
  //     serviceHours: {
  //       sunday: {
  //         open: "",
  //         close: "",
  //       },
  //       monday: {
  //         open: "",
  //         close: "",
  //       },
  //       tuesday: {
  //         open: "",
  //         close: "",
  //       },
  //       wednesday: {
  //         open: "",
  //         close: "",
  //       },
  //       thursday: {
  //         open: "",
  //         close: "",
  //       },
  //       friday: {
  //         open: "",
  //         close: "",
  //       },
  //       saturday: {
  //         open: "",
  //         close: "",
  //       },
  //     },
  //   },
  // });

  const [error, setError] = useState("");
  const [status, setStatus] = useState("typing");

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [avatar, setAvatar] = useState("");
  const [images, setImages] = useState([]);
  const [sitIn, setSitIn] = useState(false);
  const [takeOut, setTakeOut] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [curbsidePickup, setCurbsidePickup] = useState(false);

  const [fileLimit, setFileLimit] = useState(false);
  const selectUniqueId = Date.now().toString();

  // const _onSubmit = (data: any) => {
  //   // alert(JSON.stringify(data));
  //   console.log(data);
  // };

  async function onSubmit(e: React.FormEvent) {
    const {
      name,
      rating,
      phoneNumber,
      instagramHandle,
      avatar,
      images,
      serviceTypes,
      serviceHours,
    } = values;

    const formData = new FormData();
    console.log(avatar[0]);
    formData.append("avatar", avatar[0]);
    formData.append("imageOne", images[0]);
    formData.append("imageTwo", images[1]);
    formData.append("imageThree", images[2]);
    formData.append("imageFour", images[3]);
    formData.append("imageFive", images[4]);
    formData.append("store", JSON.stringify(values));

    const res = await fetch("http://localhost:3000/api/store", {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    console.log(result);
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus("typing");
    setName(event.target.value);
  }

  function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus("typing");
    setRating(event.target.valueAsNumber);
  }

  function handlePhoneNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus("typing");
    setPhoneNumber(event.target.value);
  }

  function handleInstagramHandleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setStatus("typing");
    setInstagramHandle(event.target.value);
  }

  function handeleSitInChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus("typing");
    setSitIn((prevSitIn) => !prevSitIn);
  }

  function handleCurbsidePickupChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setStatus("typing");
    setCurbsidePickup((prevCurbsidePickup) => !prevCurbsidePickup);
  }

  function handleDeliveryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus("typing");
    setDelivery((prevDelivery) => !prevDelivery);
  }

  function handleTakeOutChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus("typing");
    setTakeOut((prevTakeout) => !prevTakeout);
  }

  return (
    <>
      <Layout>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back
        </Link>
        <div className="grid place-content-center">
          <section>
            <h1 className="p-5 shrink-0 flex place-content-center text-5xl font-bold text-black">
              add your store ☕
            </h1>
          </section>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Store Name
              </label>
              <input
                value={name}
                type="text"
                id="name"
                onChange={handleNameChange}
                className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Blue Bottle Coffee"
              />
              {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.name?.message && <p>{errors.name?.message}</p>}
              </div> */}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Rating ⭐
              </label>
              <select
                name="rating"
                onChange={() => {
                  setRating;
                }}
                className="flex h-10 w-2/12 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
              <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.rating?.message && <p>{errors.rating?.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Phone Number
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="phoneNumber"
                      placeholder="(666)-666-6666"
                      {...field}
                    />
                  );
                }}
              />
              <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.phoneNumber?.message && (
                  <p>{errors.phoneNumber?.message}</p>
                )}
              </div>
            </div>
            <FormField
              label="Instagram"
              type="type"
              name="instagramHandle"
              placeholder="@"
              handleChangeFunc="handlet"
            />
            {/* <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Instagram
              </label>
              <Controller
                name="instagramHandle"
                control={control}
                render={({ field }) => {
                  return (
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="instagramHandle"
                      placeholder="@"
                      {...field}
                    />
                  );
                }}
              />
              <p className="text-sm text-muted-foreground">
                It's not required, but we recommend you include it!
              </p>
              <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.instagramHandle?.message && (
                  <p>{errors.instagramHandle?.message}</p>
                )}
              </div>
            </div> */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Avatar
              </label>
              <input
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:bg-transparent
                hover:file:bg-violet-100"
                id="avatar"
                type="file"
                accept=".jpg, .png, .gif, .jpeg"
                {...register("avatar")}
              />
              <p className="text-sm text-muted-foreground">
                e.g. store logo, company logo, store front
              </p>
              <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.avatar?.message && <p>{errors.avatar?.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Images
              </label>
              <input
                className="block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:bg-transparent
hover:file:bg-violet-100"
                id="images"
                type="file"
                multiple
                accept=".jpg, .png, .gif, .jpeg"
                disabled={fileLimit}
                {...register("images")}
                name="images"
                // onChange={handleFileEvent}
              />
              <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.images?.message && <p>{errors.images?.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                What kind of store is it?
              </label>
              <Controller
                name="serviceTypes.sitIn"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={dineOptions}
                    instanceId={selectUniqueId}
                  />
                )}
              />
              {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.sitIn?.message && <p>{errors.sitIn?.message}</p>}
              </div> */}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Pickup
              </label>
              <Controller
                name="serviceTypes.takeOut"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: true, label: "Yes" },
                      { value: false, label: "No" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Delivery
              </label>
              <Controller
                name="serviceTypes.delivery"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: true, label: "Yes" },
                      { value: false, label: "No" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Curbside Pickup
              </label>
              <Controller
                name="serviceTypes.curbsidePickup"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: true, label: "Yes" },
                      { value: false, label: "No" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Sunday
              </label>
              <Controller
                name="serviceHours.sunday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.sunday?.open?.message && (
                  <p>{errors.sunday?.open?.message}</p>
                )}
              </div> */}
              <Controller
                name="serviceHours.sunday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.sunday?.close?.message && (
                  <p>{errors.sunday?.close?.message}</p>
                )}
              </div> */}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Monday
              </label>
              <Controller
                name="serviceHours.monday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.monday?.open?.message && (
                  <p>{errors.monday?.open?.message}</p>
                )}
              </div> */}
              <Controller
                name="serviceHours.monday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              {/* <div className="text-destructive text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {errors.monday?.close?.message && (
                  <p>{errors.monday?.close?.message}</p>
                )}
              </div> */}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Tuesday
              </label>
              <Controller
                name="serviceHours.tuesday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="serviceHours.tuesday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Wednesday
              </label>
              <Controller
                name="serviceHours.wednesday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="serviceHours.wednesday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Thursday
              </label>
              <Controller
                name="serviceHours.thursday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="serviceHours.thursday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Friday
              </label>
              <Controller
                name="serviceHours.friday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="serviceHours.friday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Saturday
              </label>
              <Controller
                name="serviceHours.saturday.open"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Open
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
              <Controller
                name="serviceHours.saturday.close"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Close
                    </label>
                    <input
                      className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      type="time"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>

            <Button type="submit">Submit</Button>
            <button type="button" onClick={handleGetValues}>
              Get values
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
