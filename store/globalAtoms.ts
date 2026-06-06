import { atom } from "jotai";
import {atomWithStorage} from "jotai/utils";

export const aboutScrollLockAtom = atomWithStorage<boolean>('aboutScrollLock',false);