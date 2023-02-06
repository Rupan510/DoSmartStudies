/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Timer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TimerUpdateFormInputValues = {
    start?: number;
    end?: number;
};
export declare type TimerUpdateFormValidationValues = {
    start?: ValidationFunction<number>;
    end?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerUpdateFormOverridesProps = {
    TimerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerUpdateFormProps = React.PropsWithChildren<{
    overrides?: TimerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    timer?: Timer;
    onSubmit?: (fields: TimerUpdateFormInputValues) => TimerUpdateFormInputValues;
    onSuccess?: (fields: TimerUpdateFormInputValues) => void;
    onError?: (fields: TimerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerUpdateFormInputValues) => TimerUpdateFormInputValues;
    onValidate?: TimerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TimerUpdateForm(props: TimerUpdateFormProps): React.ReactElement;
