import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RNFS from 'react-native-fs';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { AudioUtils } from 'react-native-audio';

//import WordFile from'./WordFile';


export default class history extends Component {
    componentDidMount() {
        this.state = {
            hasfile: false
        }

        //this.readDir();
    }

    // _readDir = async () => {
    //     //要加上去
    //     var reg = new RegExp("^.*aac.*$")
    //     // this.setState({ stop: true, recording: false, paused: false });
    //     try {

    //         await AudioRecorder.stopRecording();

    //         navigation.navigate('歷史紀錄', { url: this.state.audioPath, time: this.state.currentTime });

    //     } catch (error) {
    //         console.log("停止");
    //         console.error(error);
    //     }

    // }


    // 读取目录
    async readDir() {
        // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        //"data/user/0/com.helloworld2/files"
        //音檔
        var reg = new RegExp("^.*aac.*$");

        // var name = [];

        let output = [];

        const res = await RNFS.readDir(AudioUtils.DocumentDirectoryPath)
            .then((result) => {
                

                if (result && result.length > 0) {
                    // this.setState({ hasfile: true });

                    //result = result.filter(item => item.isFile());

                    for (let i = 0; i <= result.length; i++) {
                        // resP[i] = RNFS.readFile(result[i].path, 'utf8')
                        //resP[i] = this.readFile(result[i].path, result[i].name);
                        console.log(i)
                        if (reg.test(result[i].name)) {
                            console.log(result[i].name + "大小dfgd" + result[i].size);
                            //this.setState({ filesList: result[i].name});
                            console.log("名子" + this.state.filesList)
                            console.log(result.length + "dgdfg" + i)
                            //name = name + result[i].name;
                        }
                        //dfbdfthis.setState({ filesList: result[i].name});

                    }
                    //this.setState({ hasfile: true });
                }


                // stat the first file
                //return "笨蛋";
                return Promise.all([RNFS.stat(result[0].name), result[0].name]);
            })

            // .then((statResult) => {
            //     if (statResult[0].isFile()) {
            //         // if we have a file, read it
            //         return RNFS.readFile(statResult[1], 'utf8');
            //     }

            //     return 'no file';
            // })
            // .then((contents) => {
            //     // log the file contents
            //     console.log(contents);
            // })//會顯示ㄟ
            .catch((err) => {
                console.log(err.message + "dfgdfg", err.code);
            });

    }

    // // 读取目录
    // readDir1() {
    //     RNFS.readDir(defaultPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //         .then((result) =& gt; {
    //         console.log('GOT RESULT', result);
    //         console.log('++++++++++++++++++++++++++++++++++++++++')
    //         console.log(result.length)
    //         console.log('================================================')

    //         // stat the first file
    //         return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //     })
    //             .then((statResult) =& gt; {
    //         console.log(statResult)
    //         if (statResult[0].isFile()) {
    //             // if we have a file, read it
    //             return RNFS.readFile(statResult[1], 'utf8');
    //         }

    //         return 'no file';
    //     })
    //             .then((contents) =& gt; {
    //         // log the file contents
    //         console.log('=======================================================')
    //         console.log(contents, 'content');
    //     })
    //             .catch ((err) =& gt; {
    //         console.log(err.message, err.code);
    //     });
    // }
    // 删除文件
    // async deleteFile(filePath) {
    //     const path = AudioUtils.DocumentDirectoryPath;
    //     const res = await RNFS.unlink(path)
    //         .then(() => {
    //             console.log('FILE DELETED');
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         })
    //     return res;
    // }
    // getPath() {
    //     return 'file://'.concat(destPath);
    // }
    // // 判断文件路径是否存在
    // isFilePathExists(successCallback) {
    //     RNFS.exists(destPath)
    //         .then((value) => {
    //             successCallback(value);
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }

    /*创建目录*/
    //     async mkDir() {
    //         const options = {
    //             NSURLIsExcludedFromBackupKey: true, // iOS only
    //         };

    //         return await RNFS.mkdir(defaultPath, options)
    //             .then((res) =& gt; {
    //             console.log('MKDIR success', res);
    //             return true;
    //         }).catch ((err) =& gt; {
    //             console.log('err', err);
    //         });
    //     }
    // }


    render() {
        let filesList = this.state;



        if (filesList) {
            this.readDir();
            filesList = false;
        }
        // 
        //console.log(name);
        // let time = this.state;
        // const { navigation } = this.props;
        // let { play, pause } = this.state;

        const { navigation } = this.props;

        return (
            <View>
                <TouchableOpacity
                    style={{

                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        backgroundColor: 'black',
                        borderRadius: 10,
                    }}

                    onPress={() =>
                        navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <Icon name={"align-justify"} size={25} color="white" />
                </TouchableOpacity>
                <Text>FGHNFGNFGNFsdfsG</Text>
                <Button title="read"
                    onPress={() => this.readDir()} />
                <View>

                    {/* <View>{
                        dir ? name : 
                    }
                    </View> */}
                </View>

            </View>
        )
    }

}
