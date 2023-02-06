/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LikesCreateFormInputValues = {};
export declare type LikesCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LikesCreateFormOverridesProps = {
    LikesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type LikesCreateFormProps = React.PropsWithChildren<{
    overrides?: LikesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LikesCreateFormInputValues) => LikesCreateFormInputValues;
    onSuccess?: (fields: LikesCreateFormInputValues) => void;
    onError?: (fields: LikesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikesCreateFormInputValues) => LikesCreateFormInputValues;
    onValidate?: LikesCreateFormValidationValues;
} & React.CSSProperties>;
export default function LikesCreateForm(props: LikesCreateFormProps): React.ReactElement;
