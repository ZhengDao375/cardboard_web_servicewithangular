import { Injectable } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import adapter from 'webrtc-adapter';
@Injectable({
  providedIn: 'root'
})
export class RecorderService {

  // manipulate media record through stop, start , pause resume etc
  static mediaRecorder ;  
  static recording_time;

  // recorded video data
  static recordedBlob ;

  // buffer for recordedBlobs
  static recordedVideoSourceBuffer;  

  constructor() { }

}