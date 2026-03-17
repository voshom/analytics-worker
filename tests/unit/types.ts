// types.ts

import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

export interface ThreadMessage {
  type: string;
  payload?: any;
}

export interface ThreadResponse {
  result: any;
}

export type ThreadWrapperFunction<T> = (data: T) => ThreadResponse;

export interface WorkerConfig {
  workerType: string;
  workers: number;
}

export type WorkerFunction<T> = (data: T) => Promise<ThreadResponse>;

export type WorkerInitFunction = (args: any) => ThreadWrapperFunction<any>;

export type WorkerOptions = {
  workerType: string;
  workers: number;
  minIdle: number;
  maxIdle: number;
  idleTimeout: number;
  onMessage: (event: MessageEvent<ThreadMessage>) => void;
  onExit: (code: number, signal: NodeJS.Signals | null) => void;
};

export type WorkerOptionsFactory = (args: any) => WorkerOptions;