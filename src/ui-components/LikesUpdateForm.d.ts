/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Likes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LikesUpdateFormInputValues = {};
export declare type LikesUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LikesUpdateFormOverridesProps = {
    LikesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type LikesUpdateFormProps = React.PropsWithChildren<{
    overrides?: LikesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    likes?: Likes;
    onSubmit?: (fields: LikesUpdateFormInputValues) => LikesUpdateFormInputValues;
    onSuccess?: (fields: LikesUpdateFormInputValues) => void;
    onError?: (fields: LikesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikesUpdateFormInputValues) => LikesUpdateFormInputValues;
    onValidate?: LikesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LikesUpdateForm(props: LikesUpdateFormProps): React.ReactElement;
