//
//  IOTContainer.swift
//  unity_demo
//
//  Created by Trần Văn Tiến on 05/03/2021.
//

import Foundation

@objc(IOTContainer)

class IOTContainer: NSObject, RCTBridgeModule {
  
  static func moduleName() -> String! {
    return "IOTContainer";
  }
  
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
  @objc
  func ShowMessage(_ message:NSString, duration:Double) -> Void {
    let alert = UIAlertController(title:nil, message: message as String, preferredStyle: .alert);
        let seconds:Double = duration;
        alert.view.backgroundColor = .black
        alert.view.alpha = 0.5
        alert.view.layer.cornerRadius = 14
        
        DispatchQueue.main.async {
          (UIApplication.shared.delegate as? AppDelegate)?.window.rootViewController?.present(alert, animated: true, completion: nil);
        }
        
        DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + seconds, execute: {
          alert.dismiss(animated: true, completion: nil);
        })
  }
}
