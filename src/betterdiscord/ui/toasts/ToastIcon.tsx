import React from "@modules/react";
import type {ToastType} from "@ui/toasts";

import {CircleAlertIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon, Power} from "lucide-react";

export default function ToastIcon({type}: {type: ToastType}) {
    switch (type) {
        case "info":
            return <InfoIcon size="24px" />;
        case "success":
            return <CircleCheckIcon size="24px" />;
        case "warning":
            return <TriangleAlertIcon size="24px" />;
        case "error":
            return <CircleAlertIcon size="24px" />;
        case "enabled":
            return <Power size="24px" style={{stroke: "hsl(145, 54%, 49%)"}} />;
        case "disabled":
            return <Power size="24px" style={{stroke: "hsl(0, 54%, 60%)"}} />;
        default:
            return null;
    }
}