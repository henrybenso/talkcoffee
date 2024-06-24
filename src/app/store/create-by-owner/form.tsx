'use client';

import { useImmer } from 'use-immer';
import { schemaStore } from '@/app/validation';
import * as form from '@/components/ui/form';
import Button from '@/components/ui/button';
import Errors from '@/components/ui/errors';

interface Days {
  sunday: 'SUN';
  monday: 'MON';
  tuesday: 'TUE';
  wednesday: 'WED';
  thursday: 'TR';
  friday: 'FRI';
  saturday: 'SAT';
}
export const Days = {
  sunday: 'SUN',
  monday: 'MON',
  tuesday: 'TUE',
  wednesday: 'WED',
  thursday: 'TR',
  friday: 'FRI',
  saturday: 'SAT',
};

// enum DineTypes {
//   CAFE = "CAFE",
//   BAR = "BAR",
// }

export default function Form() {
  const [store, storeUpdate] = useImmer({
    name: '',
    rating: '5',
    phoneNumber: '',
    instagramHandle: '',
    avatar: '',
    images: '',
    serviceTypes: {
      dine: {
        table: false,
        bar: false,
      },
      takeout: false,
      delivery: false,
      curbsidepickup: false,
    },
    serviceHours: {
      sunday: {
        open: '',
        close: '',
      },
      monday: {
        open: '',
        close: '',
      },
      tuesday: {
        open: '',
        close: '',
      },
      wednesday: {
        open: '',
        close: '',
      },
      thursday: {
        open: '',
        close: '',
      },
      friday: {
        open: '',
        close: '',
      },
      saturday: {
        open: '',
        close: '',
      },
    },
  });

  const result = schemaStore.safeParse(store);
  const errors = result.success ? {} : result.error.format();

  async function onSubmit(e) {}

  function handleDineChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    storeUpdate((draft) => {
      draft.sitIn[name as keyof typeof store.sitIn] = checked;
    });
  }

  return (
    <div className="p-8">
      <section>
        <h1 className="p-5 shrink-0 place-content-center text-5xl font-bold text-black">
          add your store ☕
        </h1>
      </section>
      <form onSubmit={onSubmit} className="min-w-80 space-y-8 p-8">
        <div>
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            What kind of store is it?
          </label>
          <form.DineFormField
            name={'table'}
            value={store.serviceTypes.dine.table}
            onChange={handleDineChange}
            label={'table'}
            labelValue={'Sit-at-table'}
          >
            <Errors errors={errors?.serviceTypes?.dine?.table?._errors} />
          </form.DineFormField>
          <form.DineFormField
            name={'bar'}
            value={store.serviceTypes.dine.bar}
            onChange={handleDineChange}
            label={'bar'}
            labelValue={'Bar'}
          >
            <Errors errors={errors?.serviceTypes?.dine?.bar?._errors} />
          </form.DineFormField>
        </div>
        <div>
          <Label>Are these options available?</Label>
          <input
            type="checkbox"
            id="takeOut"
            {...register('serviceTypes.takeOut')}
          />
          <label htmlFor="takeOut">Take Out</label>
          <input
            type="checkbox"
            id="delivery"
            {...register('serviceTypes.delivery')}
          />
          <label htmlFor="delivery">Delivery</label>
          <input
            type="checkbox"
            id="curbsidePickup"
            {...register('serviceTypes.curbsidePickup')}
          />
          <label htmlFor="curbsidePickup">Curside Pickup</label>
        </div>

        <div className="flex flex-wrap gap-4 place-content-evenly px-8 pt-8">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Sunday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.sunday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.sunday.close')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Monday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.monday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.monday.close')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Tuesday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.tuesday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.tuesday.close')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Wednesday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.wednesday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.wednesday.close')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Thursday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.thursday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.thursday.close')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Friday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.friday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.friday.close')}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Saturday
            </label>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Open
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.saturday.open')}
              />
            </div>
            <div>
              <label className="pr-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Close
              </label>
              <input
                className="h-10 rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                {...register('serviceHours.saturday.close')}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="flex place-content-center text-sm text-muted-foreground">
            Leave the fields blank if the store is closed on that day
          </p>
        </div>

        <div className="p-5 shrink-0 flex place-content-center">
          <Button type="submit">Submit</Button>
          {/* <button type="button" onClick={handleGetValues}>
            Get values
          </button> */}
        </div>
      </form>
    </div>
  );
}

function A() {
  return (
    <>
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          What kind of store is it?
        </label>
        <div>
          <div>
            <input
              type="checkbox"
              id="sitAtTable"
              {...register('serviceTypes.sitIn.sitAtTable')}
            />
            <label htmlFor="sitAtTable">Sit-at-table</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bar"
              {...register('serviceTypes.sitIn.bar')}
            />
            <label htmlFor="Bar">Bar</label>
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Are these options available?
        </label>
        <div>
          <div>
            <input
              type="checkbox"
              id="takeOut"
              {...register('serviceTypes.takeOut')}
            />
            <label htmlFor="takeOut">Take Out</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="delivery"
              {...register('serviceTypes.delivery')}
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="curbsidePickup"
              {...register('serviceTypes.curbsidePickup')}
            />
            <label htmlFor="curbsidePickup">Curside Pickup</label>
          </div>
        </div>
      </div>
    </>
  );
}
