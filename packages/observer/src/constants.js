import {toast} from "react-toastify";

export const CURRENT_DATE = new Date();

export const DATE_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export const TIME_OPTIONS = {
  hour12: false,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
};

export const READABLE_DATETIME = CURRENT_DATE.toLocaleString('en-US', {
  ...DATE_OPTIONS,
  ...TIME_OPTIONS
});

export const TOAST_CONFIG = {
  position: toast.POSITION.BOTTOM_RIGHT,
  closeButton: true,
  autoClose: false
}

