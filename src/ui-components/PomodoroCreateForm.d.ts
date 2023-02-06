/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PomodoroCreateFormInputValues = {
    start?: number;
    end?: number;
};
export declare type PomodoroCreateFormValidationValues = {
    start?: ValidationFunction<number>;
    end?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PomodoroCreateFormOverridesProps = {
    PomodoroCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PomodoroCreateFormProps = React.PropsWithChildren<{
    overrides?: PomodoroCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PomodoroCreateFormInputValues) => PomodoroCreateFormInputValues;
    onSuccess?: (fields: PomodoroCreateFormInputValues) => void;
    onError?: (fields: PomodoroCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PomodoroCreateFormInputValues) => PomodoroCreateFormInputValues;
    onValidate?: PomodoroCreateFormValidationValues;
} & React.CSSProperties>;
export default function PomodoroCreateForm(props: PomodoroCreateFormProps): React.ReactElement;
