import State from "../State/State";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import * as FileSaver from "file-saver";

export const downloadFile = (): ThunkAction<void, State, void, Action> => {
  return async (dispatch, getState) => {
    const { form } = getState()

    const response = await fetch("https://api-dps.herokuapp.com/createXLS", {
      body: JSON.stringify(form),
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json"
      },
      method: "POST"
    })

    if (response.ok) {
      console.log("DONE")
      const responseObject = await response.arrayBuffer();

      const file = new Blob([responseObject], { type: "text/plain;charset=utf-16" });
      FileSaver.saveAs(file, 'danove_priznani' + '.xml');

    }
    else {
      console.error("Error - download of xml document failed.")
    }
  };
};
