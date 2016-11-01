//
//  HttpCache.m
//  testcache
//
//  Created by thor on 2016/10/28.
//  Copyright © 2016年 Facebook. All rights reserved.
//


#import "HttpCache.h"
#import "RCTBridge.h"
#import "RCTLog.h"

@implementation RCTHttpCache

RCT_EXPORT_MODULE(HttpCache);

RCT_EXPORT_METHOD(getHttpCacheSize:(RCTResponseSenderBlock)callback)
{
  NSURLCache *httpCache = [NSURLCache sharedURLCache];
  callback(@[[NSNull null], @([httpCache currentDiskUsage])]);
}

RCT_EXPORT_METHOD(clearCache:(RCTResponseSenderBlock)callback)
{
  NSURLCache *httpCache = [NSURLCache sharedURLCache];
  [httpCache removeAllCachedResponses];
  callback(@[[NSNull null]]);
}


@end
