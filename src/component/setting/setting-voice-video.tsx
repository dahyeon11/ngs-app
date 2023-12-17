import React, { useEffect } from "react";
import { Select, Space, Slider, Switch, Typography, Skeleton } from "antd";

const SettingVoiceVideo = () => {
  const [sourceType, setSourceType] = React.useState<
    "Application Window" | "Display Screen" | "Video Source"
  >("Application Window");

  const [inputDevice, setInputDevice] = React.useState<MediaDeviceInfo[]>();
  const [outputDevice, setOutputDevice] = React.useState<MediaDeviceInfo[]>();
  const [videoDevice, setVideoDevice] = React.useState<MediaDeviceInfo[]>();
  const [inputDeviceVolume, setInputDeviceVolume] = React.useState<number>(50);
  const [outputDeviceVolume, setOutputDeviceVolume] =
    React.useState<number>(50);
  const [defaultOutputDevice, setDefaultOutputDevice] =
    React.useState<MediaDeviceInfo>();
  const [defaultInputDevice, setDefaultInputDevice] =
    React.useState<MediaDeviceInfo>();
  const [defaultVideoDevice, setDefaultVideoDevice] =
    React.useState<MediaDeviceInfo>();

  useEffect(() => {
    console.log(sourceType);
    navigator.mediaCapabilities
      .encodingInfo({
        video: {
          contentType: 'video/webm; codecs="hevc,opus"',
          framerate: 30,
          bitrate: 10000,
          height: 1920,
          width: 1080,
        },
        type: "webrtc",
      })
      .then((result) => {
        console.log(result);
      });
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      console.log(devices);
      setOutputDevice(
        devices.filter((device) => device.kind === "audiooutput")
      );
      setInputDevice(devices.filter((device) => device.kind === "audioinput"));
      setDefaultInputDevice(
        devices.find(
          (device) =>
            device.kind === "audioinput" && device.deviceId === "default"
        )
      );
      setDefaultOutputDevice(
        devices.find(
          (device) =>
            device.kind === "audiooutput" && device.deviceId === "default"
        )
      );
      setVideoDevice(devices.filter((device) => device.kind === "videoinput"));
    });
    // navigator.mediaDevices.getDisplayMedia().then((stream) => {
    // 	console.log(stream);
    // 	setStream(stream);
    // });
    // const stream = navigator.mediaDevices
    // 	.getUserMedia({ video: true, audio: true })
    // 	.then((stream) => {
    // 		console.log(stream.getTracks());
    // 		setVideoTracks(stream.getTracks());
    // 	});
  }, [sourceType]);
  if (!inputDevice || !outputDevice || !videoDevice) return <Skeleton />;
  return (
    <div>
      {/* <Text size="xl">Voice Setting</Text> */}
      <Typography.Title level={3}>Voice Settings</Typography.Title>
      <Space wrap>
        <Select
          defaultValue={defaultInputDevice?.label}
          style={{ width: 400 }}
          onChange={(value) =>
            setDefaultInputDevice(
              inputDevice?.find((device) => device.deviceId === value)
            )
          }
          options={inputDevice?.map((source) => {
            return {
              value: source.deviceId,
              label: source.label,
            };
          })}
        />
      </Space>

      <Slider
        value={inputDeviceVolume}
        onChange={setInputDeviceVolume}
        // onChangeEnd={setInputDeviceVolume}
      />
      <Space wrap>
        <Select
          defaultValue={defaultOutputDevice?.label}
          style={{ width: 400 }}
          onChange={(value) =>
            setDefaultOutputDevice(
              outputDevice?.find((device) => device.deviceId === value)
            )
          }
          options={outputDevice?.map((source) => {
            return {
              value: source.deviceId,
              label: source.label,
            };
          })}
        />
      </Space>
      <Slider
        value={outputDeviceVolume}
        onChange={setOutputDeviceVolume}
        // onChangeEnd={setInputDeviceVolume}
      />
      <Space size={200} />
      <Typography.Title level={3}>Video Settings</Typography.Title>
      <Space wrap>
        <Select
          defaultValue={videoDevice?.[0].label}
          style={{ width: 400 }}
          onChange={(value) => {
            videoDevice?.find((device) => device.deviceId === value);
          }}
          options={videoDevice?.map((source) => {
            return {
              value: source.deviceId,
              label: source.label,
            };
          })}
        />
      </Space>
    </div>
  );
};
export default SettingVoiceVideo;
