/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Chapter } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChapterUpdateFormInputValues = {
    chapterName?: string;
    status?: boolean;
    subjectID?: string;
};
export declare type ChapterUpdateFormValidationValues = {
    chapterName?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    subjectID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChapterUpdateFormOverridesProps = {
    ChapterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    chapterName?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    subjectID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChapterUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChapterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chapter?: Chapter;
    onSubmit?: (fields: ChapterUpdateFormInputValues) => ChapterUpdateFormInputValues;
    onSuccess?: (fields: ChapterUpdateFormInputValues) => void;
    onError?: (fields: ChapterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChapterUpdateFormInputValues) => ChapterUpdateFormInputValues;
    onValidate?: ChapterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChapterUpdateForm(props: ChapterUpdateFormProps): React.ReactElement;
