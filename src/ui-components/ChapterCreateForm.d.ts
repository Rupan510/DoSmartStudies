/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChapterCreateFormInputValues = {
    chapterName?: string;
    status?: boolean;
    subjectID?: string;
};
export declare type ChapterCreateFormValidationValues = {
    chapterName?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    subjectID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChapterCreateFormOverridesProps = {
    ChapterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    chapterName?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    subjectID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChapterCreateFormProps = React.PropsWithChildren<{
    overrides?: ChapterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChapterCreateFormInputValues) => ChapterCreateFormInputValues;
    onSuccess?: (fields: ChapterCreateFormInputValues) => void;
    onError?: (fields: ChapterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChapterCreateFormInputValues) => ChapterCreateFormInputValues;
    onValidate?: ChapterCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChapterCreateForm(props: ChapterCreateFormProps): React.ReactElement;
