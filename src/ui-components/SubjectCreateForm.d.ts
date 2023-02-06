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
export declare type SubjectCreateFormInputValues = {
    subjectName?: string;
    status?: boolean;
};
export declare type SubjectCreateFormValidationValues = {
    subjectName?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubjectCreateFormOverridesProps = {
    SubjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    subjectName?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SubjectCreateFormProps = React.PropsWithChildren<{
    overrides?: SubjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubjectCreateFormInputValues) => SubjectCreateFormInputValues;
    onSuccess?: (fields: SubjectCreateFormInputValues) => void;
    onError?: (fields: SubjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubjectCreateFormInputValues) => SubjectCreateFormInputValues;
    onValidate?: SubjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubjectCreateForm(props: SubjectCreateFormProps): React.ReactElement;
