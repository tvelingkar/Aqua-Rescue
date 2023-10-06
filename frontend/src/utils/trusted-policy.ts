/**
 * IBM Confidential
 *
 * OCO Source Materials
 * Copyright IBM Corp.  2022
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 */
import DOMPurify from 'isomorphic-dompurify'

export class TrustedPolicyUtil {
  public static createHTML = (value: string) => DOMPurify.sanitize(value)
  public static createScriptURL = (value: string) => DOMPurify.sanitize(value)
  public static createScript = (value: string) => DOMPurify.sanitize(value)

  public static createPolicy = () => {
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
      window.trustedTypes.createPolicy('default', {
        createHTML: TrustedPolicyUtil.createHTML,
        createScriptURL: TrustedPolicyUtil.createScriptURL,
        createScript: TrustedPolicyUtil.createScript,
      })
    }
  }
}
