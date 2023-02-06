/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pomodoro } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PomodoroUpdateFormInputValues = {
    start?: number;
    end?: number;
};
export declare type PomodoroUpdateFormValidationValues = {
    start?: ValidationFunction<number>;
    end?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PomodoroUpdateFormOverridesProps = {
    PomodoroUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PomodoroUpdateFormProps = React.PropsWithChildren<{
    overrides?: PomodoroUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pomodoro?: Pomodoro;
    onSubmit?: (fields: PomodoroUpdateFormInputValues) => PomodoroUpdateFormInputValues;
    onSuccess?: (fields: PomodoroUpdateFormInputValues) => void;
    onError?: (fields: PomodoroUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PomodoroUpdateFormInputValues) => PomodoroUpdateFormInputValues;
    onValidate?: PomodoroUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PomodoroUpdateForm(props: PomodoroUpdateFormProps): React.ReactElement;
