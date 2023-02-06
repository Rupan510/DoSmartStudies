/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Subject } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubjectUpdateFormInputValues = {
    subjectName?: string;
    status?: boolean;
};
export declare type SubjectUpdateFormValidationValues = {
    subjectName?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubjectUpdateFormOverridesProps = {
    SubjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    subjectName?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SubjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subject?: Subject;
    onSubmit?: (fields: SubjectUpdateFormInputValues) => SubjectUpdateFormInputValues;
    onSuccess?: (fields: SubjectUpdateFormInputValues) => void;
    onError?: (fields: SubjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubjectUpdateFormInputValues) => SubjectUpdateFormInputValues;
    onValidate?: SubjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubjectUpdateForm(props: SubjectUpdateFormProps): React.ReactElement;
