import { useContext, createContext, useReducer } from "react";

// For the validation object import Yup
import * as Yup from "yup";

const reservationReducerContext = createContext(null);


// Intial State for the reducer

const initialState = {
      ocassion: { value: "", isBlur: false, isError: false, errorMessage: "" },
      date: { value: "", isBlur: false, isError: false, errorMessage: "" },
      time: { value: "", isBlur: false, isError: false, errorMessage: "" },
      email: { value: "", isBlur: false, isError: false, errorMessage: "" },
      emailConfirmation: {
        value: "",
        isBlur: false,
        isError: false,
        errorMessage: "",
      },
      name: { value: "", isBlur: false, isError: false, errorMessage: "" },
      lastName: { value: "", isBlur: false, isError: false, errorMessage: "" },
      partySize: {
        value: "0",
        isBlur: false,
        isError: false,
        errorMessage: "",
      },
      availableTimes: { value: [""], errorMessage: "" },
      canNavigateDetailSec: "",
      canNavigateBookingSec: "",
    }

// Reducer logic
const reservationReducer = (reservationState, action) => {
  // Validation object with respective field methods

  // Gettin max date
  let maxDate = () => {
    let date = new Date();
    // Modify today date
    date.setDate(date.getDate() + 31);
    return date;
  };
  let maximumDate = maxDate();

  const reservationValidation = Yup.object().shape({
    ocassion: Yup.string().required("Please select an occasion"),
    time: Yup.string().required("Please select the reservation hour"),
    date: Yup.date()
      .min(
        new Date(new Date().setHours(0, 0, 0, 0)),
        "We only accept reservations up to 31 days in advance.",
      )
      .max(
        maximumDate,
        "We only accept bookings until " +
          maximumDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          }),
      ).typeError("Please select a date for your resevation").required("Please select a date for your resevation"),
    partySize: Yup.number()
      .typeError("Please enter a valid number")
      .min(1, "Must be greater than 0")
      .max(20, "Must be less than 20")
      .required("Please tell us how many seats"),
    email: Yup.string().email().required("Please your email"),
    emailConfirmation: Yup.string()
      .email()
      .oneOf([reservationState.email.value], "Emails must match")
      .required("Please confirm your email"),
    name: Yup.string().required("Please type your name"),
    lastName: Yup.string().required("Please type your last name"),
    availableTimes: Yup.array()
        .min(2, "No times available for this date"),
        
  });

  // Declare the variable to be usavble by both actions
  let errorMessageYup;
  let isThereError;
  switch (action.type) {
    case "element-change":
      console.log(
        `Element change at ${action.field} with value: ${action.value}`,
      );
      // Validation: Validation is perform inside the the object using the resevation validation object with validation methods to set the value of is error

      //Redeclare each time to empty its values
      errorMessageYup = "";
      isThereError = false;
      try {
        Yup.reach(reservationValidation, action.field).validateSync(
          action.value,
        );
      } catch (error) {
        errorMessageYup = error.message;
        // I check if the return message is equal, since when there is not error the inputed and the return value are the same
        isThereError = errorMessageYup === action.value ? false : true;
        console.log("Trying validation, is there error?", isThereError);
        // Assign the erro message to the variable to then assign it to the state object field error message
        errorMessageYup = error.message;
      }

      // State update: Here I update the sate using the proper syntax to avoid overwritting the properties
      const changeState = {
        ...reservationState,
        [action.field]: {
          ...reservationState[action.field],
          value: action.value,
          isError: isThereError,
          errorMessage: errorMessageYup,
        },
      };
      // Validation
      console.log(changeState);
      return changeState;

    case "element-blur":

        // If the user blurs the 'time' field
    if (action.field === 'time') {
        const hasTimesAvailable = reservationState.availableTimes.value.length > 0;
        
        // Only trigger the "Required" error if there are actually times to choose from
        if (!hasTimesAvailable) {
            return reservationState; // Do nothing, let the 'No times available' logic handle it
        }
    }

      console.log(
        `Element blur at ${action.field} with value: ${action.value}`,
      );

      // Validation: Validation is perform inside the the object using the resevation validation object with validation methods to set the value of is error

      // Assign the previously defined values in case there no error
      errorMessageYup = reservationState[action.field].errorMessage;
      isThereError = "";

      try {
        Yup.reach(reservationValidation, action.field).validateSync(
          action.value,
        );
      } catch (error) {
        errorMessageYup = error.message;
        // I check if the return message is equal, since when there is not error the inputed and the return value are the same
        isThereError = errorMessageYup === action.value ? false : true;
        console.log("Trying validation, is there error?", isThereError);
        // Assign the erro message to the variable to then assign it to the state object field error message
        errorMessageYup = error.message;
      }

      const blurState = {
        ...reservationState,
        [action.field]: {
          ...reservationState[action.field],
          isBlur: true,
          value: action.value,
          isError: isThereError,
          errorMessage: errorMessageYup,
        },
      };

      console.log(blurState);
      return blurState;

    // Aditional logic for avaliable booking times
    case "set-times":
      console.log(`Available times for booking at date`, action.value);
      const timesState = {
        ...reservationState,
        [action.field]: {
          ...reservationState[action.field],
          value: action.value,
        },
        time: { value: "" },
      };
      return timesState;
    case "CHECK_RESERVATION_DETAILS":
      //Array of the object keys
      let objectEntry = Object.keys(reservationState);

      /* 
            Copy of the values of the reservation detail into an object
            Like key - value pairs and not the previous complex structure
            */
      let copyReservationStateValues = {};

      let excludeKeysCopy = [
        "canNavigateDetailSec",
        "canNavigateBookingSec",
        //"availableTimes",
        "emailConfirmation",
        "email",
        "name",
        "lastName",
      ];

      objectEntry.forEach((entry, index, arr) => {
        if (!excludeKeysCopy.includes(entry)) {
          copyReservationStateValues[entry] = reservationState[entry].value;

          console.log(
            `Adding to the object ${entry} with value ${reservationState[entry].value}`,
          );
        }
      });

      console.log("Copy object", copyReservationStateValues);

      // Performing the validation with the copy and the schema

      // Logic for this
      let yupErrorSchemaObject = "";
      let detailsState = { ...reservationState }; // Activating the state copy

      try {
        // Run the validation schema
        reservationValidation.validateSync(copyReservationStateValues, {
          abortEarly: false,
        });
      } catch (error) {
        console.log(
          "These are the error of the validation schema",
          error.inner,
        );
        yupErrorSchemaObject = error.inner;

        // Set the flag to true  so that the user can validate if no error was thrown
        let canNotNaviagateCounter = 0;
        let canNavigate = false;
        yupErrorSchemaObject.forEach((field) => {
          if (!excludeKeysCopy.includes(field.path)) {
            canNotNaviagateCounter++;
          }
        });

        canNavigate = canNotNaviagateCounter > 0 ? false : true;

        console.log(
          `Can navigate? ${canNavigate}, Error found ${canNotNaviagateCounter}`,
        );
        detailsState = {
          ...detailsState,
          canNavigateDetailSec: canNavigate,
        };

        // Returning the new object with errors

        yupErrorSchemaObject.forEach((field) => {
          let fieldMappingYup = field.path; //Field name of the error validation schema

          if (field.message && !excludeKeysCopy.includes(fieldMappingYup)) {
            detailsState = {
              ...detailsState,
              [fieldMappingYup]: {
                ...detailsState[fieldMappingYup],
                isBlur: true,
                isError: true,
                errorMessage: field.message,
              },
            };
          }
        });

        // Adding the flag that defines if the usar can navigate or not
        /*
                detailsState = {
                    ...detailsState,
                    canNavigateDetailSec: false
                }
                    */

        console.log(
          "Final Object for details schema validation: ",
          detailsState,
        );

        return detailsState;
      }

    case "RESET_NAVIGATION":
        const resetStateCopy = {
            ...reservationState,
            [action.field]: false
        }
        return resetStateCopy

    case "RESET_AVAILABLE_TIMES_ERROR":
        
    
        if (reservationState.availableTimes.value.length === 0 && reservationState.date.isBlur){
            return {...reservationState,
                availableTimes: {
                ...reservationState.availableTimes,
                isBlur: true,
                isError: true,
                errorMessage: "No times available for this date"}
              }
        }
        else if (reservationState.availableTimes.value.length > 0){
            
            return {
                ...reservationState,
                availableTimes: {
                ...reservationState.availableTimes,
                isBlur: false,
                isError: false,
                errorMessage: "",
              },
            }
        }
        
    case "CHECK_CONTACT_INFORMATION":

    console.log("I'm being trigger");
      //Creating a copy in an Array of the object keys

      let objectEntry2 = Object.keys(reservationState);

      console.log("getting mappin of keys", objectEntry2);

      /* 
            Copy of the values of the reservation detail into an object
            Like key - value pairs and not the previous complex structure
            */
      let copyReservationStateValues2 = {};

      let excludeKeysCopy2 = [
        "canNavigateDetailSec",
        "canNavigateBookingSec",
        
      ];

      objectEntry2.forEach((entry) => {
        if (!excludeKeysCopy2.includes(entry)) {
          copyReservationStateValues2[entry] = reservationState[entry].value;

          console.log(
            `Adding to the object ${entry} with value ${reservationState[entry].value}`,
          );
        }
      });

      console.log("Copy object", copyReservationStateValues2);

      // Performing the validation with the copy and the schema

      // Logic for this
      let yupErrorSchemaObject2 = "";
      let contactState = { ...reservationState }; // Activating the state copy

      try {
        // Run the validation schema
        reservationValidation.validateSync(copyReservationStateValues2, {
          abortEarly: false,
        });
      } catch (error) {
        console.log(
          "These are the error of the validation schema",
          error.inner,
        );
        yupErrorSchemaObject2 = error.inner;

        // Set the flag to true  so that the user can validate if no error was thrown
        let canNotNaviagateCounter2 = 0;
        let canNavigate2 = false;
        yupErrorSchemaObject2.forEach((field) => {
          if (!excludeKeysCopy2.includes(field.path)) {
            canNotNaviagateCounter2++;
          }
        });

        canNavigate2 = canNotNaviagateCounter2 > 0 ? false : true;

        console.log(
          `Can navigate? ${canNavigate2}, Error found ${canNotNaviagateCounter2}`,
        );
        contactState = {
          ...contactState,
          canNavigateBookingSec: canNavigate2,
        };

        // Returning the new object with errors

        yupErrorSchemaObject2.forEach((field) => {
          let fieldMappingYup = field.path; //Field name of the error validation schema

          if (field.message && !excludeKeysCopy2.includes(fieldMappingYup)) {
            contactState= {
              ...contactState,
              [fieldMappingYup]: {
                ...contactState[fieldMappingYup],
                isBlur: true,
                isError: true,
                errorMessage: field.message,
              },
            };
          }
        });

        console.log(
          "Final Object for details schema validation: ",
          contactState,
        );

        return contactState;
      }

      //Handling when all fields are correct
      return contactState = {
          ...contactState,
          canNavigateBookingSec: true,
        };


    case "RESET_STATE":
      return initialState
      
    default:
      return reservationState;
  }
};

export function ReservationFormReducerContext({ children }) {
  const [reservationState, reservationDispatch] = useReducer(
    reservationReducer, initialState);

  // getField function to simplify the error rendering
  // Simplifies the logic to determine whether or not is require to render the error

  const getFieldError = (field) => {
    const isShowError =
      reservationState[field].isBlur && reservationState[field].isError;
    return isShowError ? reservationState[field].errorMessage : false;
  };

  return (
    <reservationReducerContext.Provider
      value={{
        reservationState,
        reservationDispatch,
        reservationReducer,
        getFieldError,
      }}
    >
      {children}
    </reservationReducerContext.Provider>
  );
}

export const useReservationFormReducer = () =>
  useContext(reservationReducerContext);
