/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Chapter } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChapterUpdateForm(props) {
  const {
    id: idProp,
    chapter,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    chapterName: "",
    status: false,
    subjectID: "",
  };
  const [chapterName, setChapterName] = React.useState(
    initialValues.chapterName
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [subjectID, setSubjectID] = React.useState(initialValues.subjectID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = chapterRecord
      ? { ...initialValues, ...chapterRecord }
      : initialValues;
    setChapterName(cleanValues.chapterName);
    setStatus(cleanValues.status);
    setSubjectID(cleanValues.subjectID);
    setErrors({});
  };
  const [chapterRecord, setChapterRecord] = React.useState(chapter);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Chapter, idProp) : chapter;
      setChapterRecord(record);
    };
    queryData();
  }, [idProp, chapter]);
  React.useEffect(resetStateValues, [chapterRecord]);
  const validations = {
    chapterName: [],
    status: [],
    subjectID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          chapterName,
          status,
          subjectID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Chapter.copyOf(chapterRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChapterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Chapter name"
        isRequired={false}
        isReadOnly={false}
        value={chapterName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              chapterName: value,
              status,
              subjectID,
            };
            const result = onChange(modelFields);
            value = result?.chapterName ?? value;
          }
          if (errors.chapterName?.hasError) {
            runValidationTasks("chapterName", value);
          }
          setChapterName(value);
        }}
        onBlur={() => runValidationTasks("chapterName", chapterName)}
        errorMessage={errors.chapterName?.errorMessage}
        hasError={errors.chapterName?.hasError}
        {...getOverrideProps(overrides, "chapterName")}
      ></TextField>
      <SwitchField
        label="Status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={status}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              chapterName,
              status: value,
              subjectID,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></SwitchField>
      <TextField
        label="Subject id"
        isRequired={false}
        isReadOnly={false}
        value={subjectID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              chapterName,
              status,
              subjectID: value,
            };
            const result = onChange(modelFields);
            value = result?.subjectID ?? value;
          }
          if (errors.subjectID?.hasError) {
            runValidationTasks("subjectID", value);
          }
          setSubjectID(value);
        }}
        onBlur={() => runValidationTasks("subjectID", subjectID)}
        errorMessage={errors.subjectID?.errorMessage}
        hasError={errors.subjectID?.hasError}
        {...getOverrideProps(overrides, "subjectID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || chapter)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || chapter) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
