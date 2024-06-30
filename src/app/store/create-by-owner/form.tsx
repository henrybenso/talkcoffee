"use client";

import { useImmer } from "use-immer";
import { schemaStore } from "@/app/validation";
import * as form from "@/components/ui/form";
import Button from "@/components/ui/button";
import Errors from "@/components/ui/errors";
import Label from "@/components/ui/label";

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

// enum DineTypes {
//   CAFE = "CAFE",
//   BAR = "BAR",
// }

export default function Form() {
  const [store, storeUpdate] = useImmer({
    name: '',
    ownerName: '',
    email: '',
    phoneNumber: '',
    instagramHandle: '',
    avatar: '',
    images: '',
    serviceTypes: {
      table: false,
      bar: false,
      takeout: false,
      delivery: false,
      curbsidePickup: false,
    },
    hours: {
      SUN: {
        open: '',
        close: '',
      },
      MON: {
        open: '',
        close: '',
      },
      TUE: {
        open: '',
        close: '',
      },
      WED: {
        open: '',
        close: '',
      },
      TR: {
        open: '',
        close: '',
      },
      FRI: {
        open: '',
        close: '',
      },
      SAT: {
        open: '',
        close: '',
      },
    },
  });

  console.log('re-rendered');
  const result = schemaStore.safeParse(store);
  const errors = result.success ? {} : result.error.format();

  const handleGetValues = (e) => {
    e.preventDefault();
    console.log('Get Values', store);
  };

  async function onSubmit(e) {
    e.preventDefault();

    const formValid = schemaStore.safeParse(store);
    if (!formValid.success) {
      console.log(formValid.error.format());
      return;
    }
    console.log('Form is valid', store);
  }

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    storeUpdate((draft) => {
      draft[e.target.name as keyof typeof store] = e.target.value;
    });
  }

  function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    storeUpdate((draft) => {
      draft[e.target.name] = e.target.files;
    });
  }

  // function handleDineChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const { name, checked } = e.target;
  //   storeUpdate((draft) => {
  //     draft.serviceTypes.dine[name as keyof typeof store.serviceTypes.dine] =
  //       checked;
  //   });
  // }

  function handleDineChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    storeUpdate((draft) => {
      draft.serviceTypes.dine[name as keyof typeof store.serviceTypes.dine] =
        checked;
    });
  }

  function handleServiceTypesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    storeUpdate((draft) => {
      draft.serviceTypes[name as keyof typeof store.serviceTypes] = checked;
    });
  }

  function handleOpenHoursChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    storeUpdate((draft) => {
      draft.hours[name as keyof typeof store.hours].open = value;
    });
  }

  function handleCloseHoursChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    storeUpdate((draft) => {
      draft.hours[name as keyof typeof store.hours].close = value;
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 p-8">
      <div className="flex flex-wrap gap-4">
        <div className="grow space-y-2">
          <Label>Your Name</Label>
          <form.InputField
            name="ownerName"
            value={store.ownerName}
            onChange={handleFieldChange}
            subtext={`Only authorized store personnel or store owners may submit a store.`}
          >
            <Errors errors={errors?.ownerName?._errors} />
          </form.InputField>
        </div>
        <div className="grow space-y-2">
          <Label>Email</Label>
          <form.InputField
            name="email"
            value={store.email}
            onChange={handleFieldChange}
          ></form.InputField>
          <Errors errors={errors?.email?._errors} />
        </div>
        <div className="grow space-y-2">
          <Label>Store Name</Label>
          <form.InputField
            name="name"
            value={store.name}
            placeholder=" Blue Bottle Coffee"
            onChange={handleFieldChange}
          ></form.InputField>
          <Errors errors={errors?.name?._errors} />
        </div>
        <div className="grow space-y-2">
          <Label>Phone Number</Label>
          <form.InputField
            name="phoneNumber"
            value={store.phoneNumber}
            placeholder="123-456-7890"
            onChange={handleFieldChange}
          >
            <Errors errors={errors?.phoneNumber?._errors} />
          </form.InputField>
        </div>
        <div className="grow space-y-2">
          <Label>Instagram Handle</Label>
          <form.InputField
            name="instagramHandle"
            value={store.instagramHandle}
            placeholder="@"
            onChange={handleFieldChange}
            subtext={`It's not required, but we recommend to provide it!`}
          >
            <Errors errors={errors?.instagramHandle?._errors} />
          </form.InputField>
        </div>
      </div>

      <div>
        <Label>What kind of store is it?</Label>
        <form.DineField
          name="table"
          value={store.serviceTypes.table}
          onChange={handleServiceTypesChange}
          label="table"
          labelValue="sit-at-table"
        ></form.DineField>
        <form.DineField
          name="bar"
          value={store.serviceTypes.bar}
          onChange={handleServiceTypesChange}
          label="bar"
          labelValue="bar"
        ></form.DineField>
      </div>
      <div>
        <Label>Are these options available?</Label>
        <form.DineField
          name="takeout"
          onChange={handleServiceTypesChange}
          value={store.serviceTypes.takeout}
          label="takeOut"
          labelValue="take out"
        ></form.DineField>
        <form.DineField
          name="delivery"
          onChange={handleServiceTypesChange}
          value={store.serviceTypes.delivery}
          label="delivery"
          labelValue="delivery"
        ></form.DineField>
        <form.DineField
          name="curbsidePickup"
          onChange={handleServiceTypesChange}
          value={store.serviceTypes.curbsidePickup}
          label="curbsidePickup"
          labelValue="curbside pickup"
        ></form.DineField>
        <Errors errors={errors?.serviceTypes?._errors} />
      </div>

      <div className="flex flex-wrap gap-4 place-content-evenly">
        <div className="space-y-2">
          <Label>Sunday</Label>
          <form.TimeField
            label="Open"
            name="SUN"
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.SUN?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label="Close"
            name="SUN"
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.SUN?.close?._errors || errors.hours?.SUN?._errors
              }
            />
          </form.TimeField>
        </div>
        <div className="space-y-2">
          <Label>Monday</Label>
          <form.TimeField
            label="Open"
            name="MON"
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.MON?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label="Close"
            name="MON"
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.MON?.close?._errors || errors.hours?.MON?._errors
              }
            />
          </form.TimeField>
        </div>
        <div className="space-y-2">
          <Label>Tuesday</Label>
          <form.TimeField
            label={'Open'}
            name={`TUE`}
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.TUE?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label={'Close'}
            name={`TUE`}
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.TUE?.close?._errors || errors.hours?.TUE?._errors
              }
            />
          </form.TimeField>
        </div>
        <div className="space-y-2">
          <Label>Wednesday</Label>
          <form.TimeField
            label={'Open'}
            name={`WED`}
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.WED?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label={'Close'}
            name={`WED`}
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.WED?.close?._errors || errors.hours?.WED?._errors
              }
            />
          </form.TimeField>
        </div>
        <div className="space-y-2">
          <Label>Thursday</Label>
          <form.TimeField
            label={'Open'}
            name={'TR'}
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.TR?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label={'Close'}
            name={`TR`}
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.TR?.close?._errors || errors?.hours?.TR?._errors
              }
            />
          </form.TimeField>
        </div>
        <div className="space-y-2">
          <Label>Friday</Label>
          <form.TimeField
            label={'Open'}
            name={`FRI`}
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.FRI?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label={'Close'}
            name={`FRI`}
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.FRI?.close?._errors ||
                errors?.hours?.FRI?._errors
              }
            />
          </form.TimeField>
        </div>
        <div className="space-y-2">
          <Label>Saturday</Label>
          <form.TimeField
            label="Open"
            name="SAT"
            onChange={handleOpenHoursChange}
          >
            <Errors errors={errors?.hours?.SAT?.open?._errors} />
          </form.TimeField>
          <form.TimeField
            label="Close"
            name="SAT"
            onChange={handleCloseHoursChange}
          >
            <Errors
              errors={
                errors?.hours?.SAT?.close?._errors ||
                errors?.hours?.SAT?._errors
              }
            />
          </form.TimeField>
        </div>
      </div>
      <div>
        <p className="flex place-content-center text-sm text-muted-foreground">
          Leave the fields blank if the store is closed on that day
        </p>
      </div>
      <div className="flex flex-wrap gap-4 place-content-evenly p-8">
        <div className="inset-y-0 right-0 space-y-2">
          <Label>Avatar</Label>
          <form.FileField
            id="avatar"
            name="avatar"
            onChange={handleFilesChange}
            subtext="e.g. store logo, company logo, store front"
          >
            <Errors errors={errors?.avatar?._errors} />
          </form.FileField>
        </div>

        <div className="inset-y-0 right-0 space-y-2">
          <Label>Images</Label>
          <form.FileField
            id="images"
            name="images"
            multiple
            onChange={handleFilesChange}
            subtext="e.g. photos of the store, interior, exterior, menu, etc."
          >
            <Errors errors={errors?.images?._errors} />
          </form.FileField>
        </div>
      </div>

      <div className="p-5 shrink-0 flex place-content-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
