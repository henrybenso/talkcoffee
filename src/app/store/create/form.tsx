"use client";

import { useImmer } from "use-immer";
import { schemaStoreUser } from "@/app/validation";
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

enum DineTypes {
  CAFE = "CAFE",
  BAR = "BAR",
}

export default function Form() {
  const [store, storeUpdate] = useImmer({
    name: "",
    rating: "",
    instagramHandle: "",
    dine: {
      table: false,
      bar: false,
    },
    avatar: null,
    images: null,
  });

  const result = schemaStoreUser.safeParse(store);
  const errors = result.success ? {} : result.error.format();

  const handleGetValues = (e) => {
    e.preventDefault();
    console.log("Get Values", store);
  };
  // --------------------------------------------------------------------------------------------

  async function submitForm(e) {
    e.preventDefault();

    const formValid = schemaStoreUser.safeParse(store);
    if (!formValid.success) {
      console.log(formValid.error.format());
      return;
    }

    console.log("submitting form", store);

    // const { name, rating, instagramHandle, avatar, images } = values;

    // const formData = new FormData();
    // console.log(avatar[0]);
    // formData.append('avatar', avatar[0]);
    // formData.append('imageOne', images[0]);
    // formData.append('imageTwo', images[1]);
    // formData.append('imageThree', images[2]);
    // formData.append('imageFour', images[3]);
    // formData.append('imageFive', images[4]);
    // formData.append('store', JSON.stringify(values));

    // const res = await fetch("http://localhost:3000/api/store", {
    //   method: "POST",
    //   body: JSON.stringify(store),
    // });
    // const result = await res.json();
    // console.log(result);
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

  function handleDineChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    storeUpdate((draft) => {
      draft.dine[name as keyof typeof store.dine] = checked;
    });
  }

  return (
    <>
      <form onSubmit={handleGetValues} className="space-y-8 py-8">
        <div className="flex flex-wrap gap-4">
          <div className="grow space-y-2">
            <Label>Store Name</Label>
            <form.InputField
              name="name"
              value={store.name}
              placeholder=" Blue Bottle Coffee"
              onChange={handleFieldChange}
            >
              <Errors errors={errors?.name?._errors} />
            </form.InputField>
          </div>
          <div className="space-y-2">
            <Label>Rating ⭐</Label>
            <form.RatingField value={store.rating} onChange={handleFieldChange}>
              <Errors errors={errors?.rating?._errors} />
            </form.RatingField>
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
          <div>
            <form.DineField
              name="table"
              value={store.dine.table}
              onChange={handleDineChange}
              label="table"
              labelValue="sit-at-table"
            >
              <Errors errors={errors?.dine?.table?._errors} />
            </form.DineField>
            <form.DineField
              name="bar"
              value={store.dine.bar}
              onChange={handleDineChange}
              label="bar"
              labelValue="bar"
            >
              <Errors errors={errors?.dine?.bar?._errors} />
            </form.DineField>
          </div>
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
        <div>
          <button type="button" onClick={handleGetValues}>
            Get values
          </button>
        </div>
      </form>
    </>
  );
}