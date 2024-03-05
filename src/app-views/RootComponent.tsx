import { ServiceCodePush } from '@app-services';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CodePush, { DownloadProgress } from 'react-native-code-push';

interface RootProps {
	children?: React.ReactNode;
}

const RootComponent: React.FC<RootProps> = ({ children }) => {
	useEffect(() => {
		if (__DEV__) {
			return;
		}
		CodePush.sync(
			{
				deploymentKey: ServiceCodePush.getCodePushKey(),
				installMode: CodePush.InstallMode.ON_NEXT_SUSPEND,
				rollbackRetryOptions: {
					maxRetryAttempts: 2,
				},
			},
			(status: CodePush.SyncStatus) => {
				switch (status) {
					case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
						ServiceCodePush.publishStatus(CodePush.SyncStatus.CHECKING_FOR_UPDATE);
						console.log('Checking for updates.');
						break;
					case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
						ServiceCodePush.publishStatus(CodePush.SyncStatus.DOWNLOADING_PACKAGE);
						console.log('Downloading package.');
						break;
					case CodePush.SyncStatus.INSTALLING_UPDATE:
						ServiceCodePush.publishStatus(CodePush.SyncStatus.INSTALLING_UPDATE);
						console.log('Installing update.');
						break;
					case CodePush.SyncStatus.UP_TO_DATE:
						ServiceCodePush.publishStatus(CodePush.SyncStatus.UP_TO_DATE);
						console.log('Up-to-date.');
						break;
					case CodePush.SyncStatus.UPDATE_INSTALLED:
						ServiceCodePush.publishStatus(CodePush.SyncStatus.UPDATE_INSTALLED);
						break;
				}
			},
			(progress: DownloadProgress) => {
				ServiceCodePush.publishProgress(progress);
			},
		);
	}, []);

	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default RootComponent;
