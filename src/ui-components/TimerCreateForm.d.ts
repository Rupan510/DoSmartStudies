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
export declare type TimerCreateFormInputValues = {
    start?: number;
    end?: number;
};
export declare type TimerCreateFormValidationValues = {
    start?: ValidationFunction<number>;
    end?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerCreateFormOverridesProps = {
    TimerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerCreateFormProps = React.PropsWithChildren<{
    overrides?: TimerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TimerCreateFormInputValues) => TimerCreateFormInputValues;
    onSuccess?: (fields: TimerCreateFormInputValues) => void;
    onError?: (fields: TimerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerCreateFormInputValues) => TimerCreateFormInputValues;
    onValidate?: TimerCreateFormValidationValues;
} & React.CSSProperties>;
export default function TimerCreateForm(props: TimerCreateFormProps): React.ReactElement;
