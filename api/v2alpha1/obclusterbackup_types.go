/*
Copyright 2023.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package v2alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// EDIT THIS FILE!  THIS IS SCAFFOLDING FOR YOU TO OWN!
// NOTE: json tags are required.  Any new fields you add must have json tags for the fields to be serialized.

// OBClusterBackupSpec defines the desired state of OBClusterBackup
type OBClusterBackupSpec struct {
	// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster
	// Important: Run "make" to regenerate code after modifying this file

	// Foo is an example field of OBClusterBackup. Edit obclusterbackup_types.go to remove/update
	Foo string `json:"foo,omitempty"`
}

// OBClusterBackupStatus defines the observed state of OBClusterBackup
type OBClusterBackupStatus struct {
	// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
	// Important: Run "make" to regenerate code after modifying this file
}

//+kubebuilder:object:root=true
//+kubebuilder:subresource:status

// OBClusterBackup is the Schema for the obclusterbackups API
type OBClusterBackup struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   OBClusterBackupSpec   `json:"spec,omitempty"`
	Status OBClusterBackupStatus `json:"status,omitempty"`
}

//+kubebuilder:object:root=true

// OBClusterBackupList contains a list of OBClusterBackup
type OBClusterBackupList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []OBClusterBackup `json:"items"`
}

func init() {
	SchemeBuilder.Register(&OBClusterBackup{}, &OBClusterBackupList{})
}