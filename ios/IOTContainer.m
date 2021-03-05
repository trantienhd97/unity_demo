//
//  IOTContainer.m
//  unity_demo
//
//  Created by Trần Văn Tiến on 05/03/2021.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(IOTContainer, NSObject)
RCT_EXTERN_METHOD(ShowMessage:(NSString *)message duration:(double *)duration)
@end
